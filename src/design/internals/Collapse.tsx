import { NCollapse, NCollapseItem } from 'naive-ui'
import { defineComponent } from 'vue'

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
          <div class="py-8px">
            {this.$slots.default?.()}
          </div>
        </NCollapseItem>
      </NCollapse>
    )
  },
})
