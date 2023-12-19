import { NInputNumber, inputNumberProps } from 'naive-ui'
import { createSlots, excludeProps } from '@form-cook/utils'
import { defineComponent } from 'vue'

export const extendInputNumberProps = {
  ...inputNumberProps,
  suffix: {
    type: String,
    default: '',
  },
  prefix: {
    type: String,
    default: '',
  },
}

export const InputNumber = defineComponent({
  name: 'InputNumber',
  inheritAttrs: false,
  props: extendInputNumberProps,
  render() {
    const { slots } = createSlots(this.$props)
    const props = excludeProps(['suffix', 'prefix'], this.$props)
    return <NInputNumber {...props} v-slots={slots} />
  },
})
