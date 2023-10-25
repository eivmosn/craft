import { NCollapse, NCollapseItem } from 'naive-ui'
import { defineComponent } from 'vue'

export default defineComponent({
  inheritAttrs: false,
  name: 'Collapse',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  render() {
    return (<NCollapse defaultExpandedNames={[this.title]}>
      <NCollapseItem class="fc-collapse" title={this.title} name={this.title}>
        <div class="fc-collapse-item grid grid-cols-3 gap-4px b-bottom p-4px">
          {this.$slots.default?.()}
        </div>
      </NCollapseItem>
    </NCollapse>)
  },
})
