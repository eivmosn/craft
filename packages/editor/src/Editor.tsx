import { defineComponent } from 'vue'
import Toolbar from './Toolbar'

export default defineComponent({
  name: 'Editor',
  inheritAttrs: false,
  render() {
    return (
      <div class="h-full bg-red">
        <Toolbar />
      </div>
    )
  },
})
