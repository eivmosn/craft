import { NInput, inputProps } from 'naive-ui'
import { defineComponent } from 'vue'
import { type CustomSlots, excludeProps } from '@/utils'

export const extendsInputProps = {
  ...inputProps,
  suffix: {
    type: String,
    default: '￥',
  },
  prefix: {
    type: String,
    default: '&',
  },
}

export default defineComponent({
  inheritAttrs: false,
  name: 'LaptopInput',
  props: extendsInputProps,
  render() {
    const slots: CustomSlots<'suffix' | 'prefix'> = {}
    const props = excludeProps<typeof this.$props>(['suffix', 'prefix'], this.$props)

    if (this.$props.suffix)
      slots.suffix = () => this.$props.suffix
    if (this.$props.prefix)
      slots.prefix = () => this.$props.prefix

    return (
      <NInput
        {...props}
        v-slots={slots}
      />
    )
  },
})
