declare namespace Simple {

  interface Component {
    id: string
    label: string
    field: string
    type: ComponentType
    props: ComponentProps
  }

  type EmptyObject<K extends string | number | symbol = string, V = unknown> = Record<K, V>

  type EmptyArray<T = unknown> = T[]

  type Form = EmptyObject

  type ComponentProps = EmptyObject

  type ComponentType = 'input' | 'select' | 'date' | 'time' | 'button'

  interface Material extends Component {
    icon: string
    children?: Array<Component>
  }

  type Materials = Array<Material>

  interface Schema {
    type: string
    labelWidth: string
    labelAlign: string
    labelPlacement: string
    suffix: string
    gapX: string
    gapY: string
    components: Array<Component>
  }

}

declare module 'vuedraggable' {
  const draggable: import('vue').DefineComponent<{
    list: Simple.Materials
  }>
  export default draggable
}
