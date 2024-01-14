import fs from 'node:fs'
import path from 'node:path'
import { cpus } from 'node:os'
import { createRequire } from 'node:module'

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
  const pkg = require(`${pkgDir}/package.json`)
  console.log({
    pkg,
    pkgDir,
  })
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
