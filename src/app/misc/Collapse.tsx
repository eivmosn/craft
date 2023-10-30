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
    return (
      <NCollapse defaultExpandedNames={[this.title]}>
        <NCollapseItem class="fc-collapse" title={this.title} name={this.title}>
          {this.$slots.default?.()}
        </NCollapseItem>
      </NCollapse>
    )
  },
})
