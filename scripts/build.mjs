import fs from 'node:fs'
import path from 'node:path'
import { cpus } from 'node:os'
import { createRequire } from 'node:module'
import { build as viteBuild } from 'vite'
import jsx from '@vitejs/plugin-vue-jsx'

const require = createRequire(import.meta.url)

const targets = fs.readdirSync('packages').filter((f) => {
  if (
    !fs.statSync(`packages/${f}`).isDirectory()
    || !fs.existsSync(`packages/${f}/package.json`)
  )
    return false

  const pkg = require(`../packages/${f}/package.json`)
  if (pkg.private && !pkg.buildOptions)
    return false

  return true
})

run()

async function run() {
  await buildAll(targets)
}

async function build(target) {
  const pkgDir = path.resolve(`packages/${target}`)

  if (target === 'components') {
    const components = getComponents(pkgDir)

    for (const component of components) {
      const entry = path.resolve(pkgDir, component, 'index.ts')
      await viteBuild({
        build: {
          lib: {
            entry,
            formats: ['es'],
          },
          rollupOptions: {
            external: ['vue', 'naive-ui'],
            output: {
              exports: 'named',
              globals: {
                vue: 'Vue',
              },
              entryFileNames: '[name].mjs',
            },
          },
          outDir: `${pkgDir}/dist/es/${component}`,
          minify: 'esbuild',
        },
        plugins: [jsx()],
      })
    }

    const dist = `${pkgDir}/dist`

    packageEntry(components, dist)
  }
}

async function buildAll(targets) {
  await runParallel(cpus().length, targets, build)
}

async function runParallel(maxConcurrency, source, iteratorFn) {
  const ret = []
  const executing = []
  for (const item of source) {
    const p = Promise.resolve().then(() => iteratorFn(item))
    ret.push(p)

    if (maxConcurrency <= source.length) {
      const e = p.then(() => {
        executing.splice(executing.indexOf(e), 1)
      })
      executing.push(e)
      if (executing.length >= maxConcurrency)
        await Promise.race(executing)
    }
  }
  return Promise.all(ret)
}

function getComponents(dir) {
  return fs.readdirSync(dir).filter((f) => {
    if (f === 'dist')
      return false
    return fs.statSync(path.resolve(dir, f)).isDirectory()
  })
}

function packageEntry(components, dist) {
  const imports = components.map((component) => {
    const source = {
      name: component,
      path: `./${component}/index.mjs`,
    }
    return `import { ${source.name} } from '${source.path}'`
  }).join('\n')

  fs.writeFileSync(path.resolve(dist, 'index.mjs'), imports)
}
