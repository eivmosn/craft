import { NScrollbar } from 'naive-ui'
import { SCROLLBAR_RAIL } from 'src/core/enums'
import type { PropType } from 'vue'
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
  name: 'FcScrollview',
  props: {
    fitEdge: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
  setup(props) {
    const scrollRef = ref<InstanceType<typeof NScrollbar>>()
    const bootstrap = () => {
      const dom = scrollRef.value.$el.nextSibling as HTMLElement
      const rail = dom.querySelector<HTMLElement>(SCROLLBAR_RAIL)
      if (props.fitEdge)
        rail.style.right = '0'
    }
    onMounted(bootstrap)
    return {
      scrollRef,
    }
  },
  render() {
    return (<NScrollbar ref="scrollRef">
      {this.$slots.default?.()}
    </NScrollbar>)
  },
})
