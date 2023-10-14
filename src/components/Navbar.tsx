import { defineComponent, inject, ref } from 'vue'
import { FormCook } from '@/core'

export default defineComponent({
  inheritAttrs: false,
  name: 'Navbar',
  setup() {
    const ttt = inject(FormCook, {
      schema: ref({}),
    })
    console.log(ttt.schema.value)
  },
  render() {
    return <div>Navbar</div>
  },
})
