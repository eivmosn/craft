import { makeMap } from '@vue/shared'

export interface FormCookContext {

}

export interface I18n {
  'zh-CN': string
  'en-US': string
}

export interface FormCookWidget {
  id: string
  type: string
  label: I18n
}

export const enum Placeholder {
  INPUT = '请输入',
  SELECT = '请选择',
}

export const isInputType = makeMap(
    `Input,TextArea,InputNumber,Password`,
)

export const isSelectType = makeMap(
    `Select,Date,Quarter,Year,Month,Time,Datetime`,
)

export const isContainerType = makeMap(
  `Grid,Card`,
)

export function placeholder(widget: FormCookWidget): string {
  const label = widget.label['zh-CN']

  if (isInputType(widget.type))
    return `${Placeholder.INPUT} ${label}`

  if (isSelectType(widget.type))
    return `${Placeholder.SELECT} ${label}`

  return Placeholder.INPUT
}

export function onConfirm(message: string) {
  return new Promise((resolve) => {
    console.log(message)
    resolve(true)
  })
}
