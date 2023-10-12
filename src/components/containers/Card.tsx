import { defineComponent } from 'vue'
import Draggable from 'vuedraggable'

export default defineComponent({
  inheritAttrs: false,
  name: 'Card',
  setup() {

  },
  render() {
    const slots: Draggable.Slot = {
      item: ({ element }) => <div>{element}</div>,
    }
    return (<Draggable v-slots={slots} />)
  },
})
