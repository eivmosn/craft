import { NButton, NButtonGroup } from 'naive-ui'
import { defineComponent } from 'vue'
import icon from '../icon.config'

export default defineComponent({
  inheritAttrs: false,
  name: 'FcOption',
  setup() {

  },
  render() {
    return (<div class="relative fc p-6px outline-blue outline">
      {this.$slots.default?.()}
      <div class="option-mask absolute inset-0 z-5"></div>
      <NButtonGroup size="tiny" class="absolute z-6 -bottom-24px -right-1px">
        <NButton type="primary" class="b-rd-0!" v-slots={{ icon: () => <span class="fc" v-html={icon.copy} /> }} />
        <NButton type="primary" class="b-rd-0!" v-slots={{ icon: () => <span class="fc" v-html={icon.delete} /> }} />
        <NButton type="primary" class="b-rd-0!" v-slots={{ icon: () => <span class="fc" v-html={icon.clear} /> }} />
      </NButtonGroup>
    </div>)
  },
})
