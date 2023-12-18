import path from 'node:path'
import { readFileSync } from 'node:fs'

const msgPath = path.resolve('.git/COMMIT_EDITMSG')
const msg = readFileSync(msgPath, 'utf-8').trim()

const commitRE
    = /^(revert: )?(feat|fix|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|wip|release)(\(.+\))?: .{1,50}/

if (!commitRE.test(msg)) {
  console.log()
  console.log('error msg!!!')
  // eslint-disable-next-line node/prefer-global/process
  process.exit(1)
}
