import { defineComponent, inject, ref } from 'vue'
import { FormCook } from '@/core'

export default defineComponent({
  inheritAttrs: false,
  name: 'Navbar',
  setup() {
    inject(FormCook, {
      schema: ref({}),
    })
  },
  render() {
    return <div>Navbar</div>
  },
})
