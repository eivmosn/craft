import { defineComponent } from 'vue'
import VueDraggable from 'vuedraggable'

export default defineComponent({
  inheritAttrs: false,
  name: 'DragWrapper',
  setup() {

  },
  render() {
    return (
      <VueDraggable
        list={[]}
        itemKey="id"
        sort={false}
        forceFallback
        fallbackOnBody
        fallbackClass="ghost"
        fallbackTolerance={5}
        scrollSensitivity={150}
      >
        {{
          item: () => this.$slots.default?.(),
        }}
      </VueDraggable>
    )
  },
})
