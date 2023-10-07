import { defineComponent, inject } from 'vue'
import TitlePanel from "./container/TitlePanel";

export default defineComponent({
  name: 'DndPanel',
  setup() {
    const designer = inject<{}>('designer')
    return {
      ...designer
    }
  },
  render() {
    return <TitlePanel title='Property Settings' class='min-w-300px'>
      123
    </TitlePanel>
  },
})
