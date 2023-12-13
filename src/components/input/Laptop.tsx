import { NFormItem, NInput, inputProps } from 'naive-ui'
import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import { type CustomSlots, excludeProps } from '@/utils'

export const extendsInputProps = {
  ...inputProps,
  suffix: {
    type: String as PropType<string>,
    default: '',
  },
  prefix: {
    type: String as PropType<string>,
    default: '',
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
      <NFormItem
        label="输入框"
        labelPlacement="left"
        showFeedback={false}
      >
        <NInput
          {...props}
          clearable
          v-slots={slots}
        />
      </NFormItem>
    )
  },
})
