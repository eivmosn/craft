import { defineComponent, provide, renderSlot } from 'vue'
import { FormCook, useFormCook } from '@/core'

export default defineComponent({
  inheritAttrs: false,
  name: 'StateProvider',
  setup() {
    provide(FormCook, useFormCook())
  },
  render() {
    return (<div class="form-cook-provider h-full flex">
      {renderSlot(this.$slots, 'default')}
    </div>)
  },
})
