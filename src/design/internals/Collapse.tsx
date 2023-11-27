import { NCollapse, NCollapseItem } from 'naive-ui'
import { defineComponent } from 'vue'
import DragWrapper from './DragWrapper'

export default defineComponent({
  name: 'Collapse',
  inheritAttrs: false,
  props: {
    title: String,
    name: {
      type: [String, Number],
      default: '',
    },
  },
  render() {
    return (
      <NCollapse
        displayDirective="show"
        defaultExpandedNames={[this.name]}
      >
        <NCollapseItem
          name={this.name}
          title={this.title}
          class="fc-collapse"
          displayDirective="show"
        >
          {this.$slots.default?.()}
        </NCollapseItem>
      </NCollapse>
    )
  },
})
