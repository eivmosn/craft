import type {
  Slot,
  VNode,
  VNodeChild,
} from 'vue'

declare global {
    type VueNode = VNode | JSX.Element | VNodeChild
    type Data = Record<string, unknown>
    interface VueSlot {
      default: Slot
    }
    namespace APIs {
      interface Response<T> {
        msg: string
        success: boolean
        data: T
      }
    }
}
