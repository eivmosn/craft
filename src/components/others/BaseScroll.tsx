import { NScrollbar } from 'naive-ui'
import type { PropType } from 'vue'
import { defineComponent, onMounted, ref, renderSlot } from 'vue'
import { SCROLLBAR_RAIL } from 'core/enums'

export default defineComponent({
  name: 'BaseScroll',
  props: {
    fitEdge: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    padding: {
      type: Number as PropType<number>,
      default: 6,
    },
  },
  setup(props) {
    const refScroll = ref<InstanceType<typeof NScrollbar>>(null)

    const fitToEdge = () => {
      const scrollbar = refScroll.value.$el
      const nextElementSibling = scrollbar.nextElementSibling
      const [rail] = nextElementSibling.querySelectorAll(SCROLLBAR_RAIL)
      if (rail && props.fitEdge)
        rail.style.right = '0px'
    }

    onMounted(fitToEdge)

    return {
      refScroll,
    }
  },
  render() {
    return (<NScrollbar ref="refScroll">
      <div style={{ padding: `${this.padding}px` }}>
        {renderSlot(this.$slots, 'default')}
      </div>
    </NScrollbar>)
  },
})
