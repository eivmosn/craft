import type { PropType } from 'vue'
import { computed, defineComponent } from 'vue'

export default defineComponent({
  inheritAttrs: false,
  name: 'FcGroup',
  props: {
    widget: Object as PropType<FC.Widget>,
  },
  setup(props) {
    const hasChildren = computed(() => props.widget.children?.length > 0)
    return {
      hasChildren,
    }
  },
  render() {
    return (<div class="b">
      <div class="min-h-30px b-bottom p-4px">
        分组标题
      </div>
      <div class="min-h-120px p-4px">
        {
            !this.hasChildren && <div class="min-h-120px fc">拖拽组件到这里</div>
        }
        {this.$slots.default?.()}
      </div>
    </div>)
  },
})
