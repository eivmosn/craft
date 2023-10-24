import { readFileSync } from 'node:fs'
import path from 'node:path'

const msgPath = path.resolve('.git/COMMIT_EDITMSG')
const msg = readFileSync(msgPath, 'utf-8').trim()

const commitRE
  = /^(revert: )?(feat|fix|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|wip|release)(\(.+\))?: .{1,50}/

if (!commitRE.test(msg)) {
  console.log()
  console.error('error commit msg!!')
  console.log()
  // eslint-disable-next-line node/prefer-global/process
  process.exit(1)
}
