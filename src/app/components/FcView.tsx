import { NScrollbar } from 'naive-ui'
import { SCROLLBAR_RAIL } from 'src/core/enums'
import type { PropType } from 'vue'
import { defineComponent, onMounted, ref } from 'vue'

export const Scrollview = defineComponent({
  name: 'Scrollview',
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

export const Paneview = defineComponent({
  name: 'Paneview',
  render() {
    return (<div class="h-full">
      <div class="h-48px fs b-bottom text-20px text-#666">
        {this.$slots.title?.()}
      </div>
      <Scrollview class="h-[calc(100%-48px)]">
        {this.$slots.default?.()}
      </Scrollview>
    </div>)
  },
})
