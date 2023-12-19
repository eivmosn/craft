import { defineComponent } from 'vue'
import { NInput } from 'naive-ui'

export const Input = defineComponent({
  inheritAttrs: false,
  name: 'Input',
  setup() {

  },
  render() {
    return (
      <NInput
        clearable
      />
    )
  },
})
