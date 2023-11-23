interface DragOption {
  sort: boolean
  filter: string
  handle: string
  itemKey: string
  group: DragGroup
  animation: number
  ghostClass: string
  fallbackClass: string
  forceFallback: boolean
  fallbackOnBody: boolean
  scrollSensitivity: number
  fallbackTolerance: number
  onEnd: (event: DragEndEvent) => void
  onStart: (event: DragStartEvent) => void
}

interface DragItem {
  _underlying_vm_: {
    label: string
  }
}

interface DragGroup {
  name: string
  pull?: string
  put?: boolean
}

interface DragEndEvent {
  item: DragItem
  to: HTMLElement
  from: HTMLElement
}

interface DragStartEvent {
  item: DragItem
  originalEvent: PointerEvent
}

type DragList = Array<Record<any, any>>

declare module 'vuedraggable' {
  import type {
    DefineComponent,
  } from 'vue'

  const Draggable: DefineComponent<Partial<DragOption> & { list: DragList }>
  export default Draggable
}
