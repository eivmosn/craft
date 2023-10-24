import { defineComponent } from 'vue'
import FcScrollview from './FcScrollview'

export default defineComponent({
  inheritAttrs: false,
  name: 'FcMonitor',
  setup() {

  },
  render() {
    return (<div class="h-[calc(100%-48px)] p-4px">
      <FcScrollview class="b">

      </FcScrollview>
    </div>)
  },
})
