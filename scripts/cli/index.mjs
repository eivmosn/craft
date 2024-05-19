import fs from 'node:fs'
import prompts from 'prompts'
import colors from 'picocolors'

const questions = [
  {
    type: 'text',
    name: 'name',
    message: 'Place input your widget name',
    validate: name => checkInvalid(name) ? colors.red('Invalid widget name') : true,
  },
  {
    type: name => checkExist(name) ? 'select' : null,
    name: 'check',
    message: name => `Widget ${colors.yellow(name)} alre ady exists. Overwrite or cancel?`,
    hint: '- Space to select. Return to submit',
    choices: [
      { title: 'cancel', value: 'cancel' },
      { title: 'overwrite', value: 'overwrite' },
    ],
  },
  {
    type: 'multiselect',
    name: 'device',
    message: 'Place pick device',
    choices: [
      { title: 'mobile', value: 'mobile' },
      { title: 'desktop', value: 'desktop' },
    ],
    max: 2,
    min: 1,
    instructions: false,
    hint: '- Space to select. Return to submit',
  },
]

function checkInvalid(name) {
  return !/^[a-zA-Z]+$/.test(name)
}

function checkExist(name) {
  const dirs = fs.readdirSync('packages/components').filter((f) => {
    if (fs.statSync(`packages/components/${f}`).isDirectory())
      return true
    return false
  })
  return dirs.includes(name)
}

await prompts(questions, {
  onSubmit: (prompt, answer) => {
    if (prompt.name === 'check' && answer === 'cancel')
      return true
    return false
  },
})
