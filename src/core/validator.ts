import type {
  FormInst,
} from 'naive-ui'

export function validator(formInst: FormInst) {
  return new Promise<boolean>(() => {
    formInst.validate().then((errors) => {
      console.log(errors)
    })
  })
}
