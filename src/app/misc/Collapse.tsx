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
        <div class="fc-collapse-item b-bottom">

        </div>
      </NCollapseItem>
    </NCollapse>)
  },
})
