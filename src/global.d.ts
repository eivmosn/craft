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
    namespace FC {
      interface Config {
        gapX: number
        gapY: number
        labelAlign: 'left' | 'right'
        labelPlacement: 'left' | 'top'
        suffix: string
        labelWidth: number
      }
      interface Form {
        data: Record<any, any>
        items: any[]
        config: Partial<Config>
      }
    }
}
