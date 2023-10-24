import { NCollapse, NCollapseItem } from 'naive-ui'
import { defineComponent } from 'vue'

export default defineComponent({
  inheritAttrs: false,
  name: 'Collapse',
  setup() {

  },
  render() {
    return (<NCollapse defaultExpandedNames={['comp']}>
      <NCollapseItem class="fc-collapse" title="组件" name="comp">
        <div class="fc-collapse-item grid grid-cols-[repeat(3,33.33%)] gap-1px b-bottom bg-[var(--fc-border)]">
          {this.$slots.default?.()}
        </div>
      </NCollapseItem>
    </NCollapse>)
  },
})
