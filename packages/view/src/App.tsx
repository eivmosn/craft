import { defineComponent } from 'vue'
import { Input } from '@form-cook/components'

export default defineComponent({
  inheritAttrs: false,
  name: 'App',
  setup() {

  },
  render() {
    return (
      <div>
        <Input />
      </div>
    )
  },
})
