import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import VueDraggable from 'vuedraggable'
import { createGhost } from '../events'

export default defineComponent({
  inheritAttrs: false,
  name: 'DragWrapper',
  props: {
    list: {
      type: Array as PropType<any[]>,
      default: () => [],
    },
  },
  render() {
    return (
      <VueDraggable
        list={this.list}
        itemKey="id"
        sort={false}
        forceFallback
        fallbackOnBody
        fallbackClass="ghost"
        fallbackTolerance={5}
        scrollSensitivity={150}
        class={this.$attrs.class}
        onStart={evt => createGhost(evt, '.ghost')}
      >
        {{
          item: () => (
            <div>
              {this.$slots.default?.()}
            </div>
          ),
        }}
      </VueDraggable>
    )
  },
})
