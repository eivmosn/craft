import { defineComponent } from 'vue'
import Draggable from 'vuedraggable'

export default defineComponent({
  inheritAttrs: false,
  name: 'Card',
  setup() {

  },
  render() {
    return (<Draggable list={[]}>

    </Draggable>)
  },
})
