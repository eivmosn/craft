declare namespace FC {
  type Key = any
  type Value = any
  type TableRow = Record<Key, Value>
  type FormData = Record<Key, Value>
  type FormSlot = (widget: Widget) => JSX.Element | string | number | symbol
  interface Props {
    required: boolean
    visible: boolean
    disabled: boolean
    placeholder: string
    clearable: boolean
    span: number
    defaultValue: Value
    validator: null
  }
  interface Widget {
    id: string
    type: ComponentType
    field: string
    label: string
    props: Partial<Props>
    children?: Widget[]
  }

  type Schema = Widget
  type ComponentType = 'form' | 'input' | 'select' | 'textarea' | 'group'
}
