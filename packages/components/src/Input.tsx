import { defineComponent } from 'vue'
import { NInput, inputProps } from 'naive-ui'
import { createSlots, excludeProps } from '@form-cook/utils'

export const extendInputProps = {
  ...inputProps,
  suffix: {
    type: String,
    default: '',
  },
  prefix: {
    type: String,
    default: '',
  },
}

export const Input = defineComponent({
  name: 'Input',
  inheritAttrs: false,
  props: extendInputProps,
  render() {
    const { slots } = createSlots(this.$props)
    const props = excludeProps(['suffix', 'prefix'], this.$props)
    return (
      <NInput {...props} v-slots={slots} />
    )
  },
})
