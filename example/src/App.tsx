import { defineComponent } from 'vue'
import { Editor } from '@form-cook/editor'

export default defineComponent({
  name: 'App',
  inheritAttrs: false,
  render() {
    return (
      <div>
        <Editor />
      </div>
    )
  },
})
