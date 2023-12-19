export type WidgetProps = Record<string, any>

export type ContainerType = 'table' | 'collapse' | 'tab' | 'card'

export type WidgetType = 'input' | 'select' | 'textarea'
  | 'checkbox' | 'radio' | 'switch' | 'date' | ContainerType

export type Column = BasicWidget

export interface BasicWidget {
  label: string
  field: string
  type: string
  hidden: boolean
  required: boolean
  disabled: boolean
  readonly: boolean
  props: WidgetProps
}
