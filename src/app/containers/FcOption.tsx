import { NButton, NButtonGroup } from 'naive-ui'
import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import icon from '../icon.config'

export default defineComponent({
  inheritAttrs: false,
  name: 'FcOption',
  props: {
    active: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
  setup() {

  },
  render() {
    return (
      <div class={['relative fc select-none p-2px hover:(outline-blue outline outline-dashed)', this.active && 'outline-blue outline!']}>
        {this.$slots.default?.()}
        <div class="option-mask absolute inset-0 z-5"></div>
        {
        this.active && (
          <NButtonGroup size="tiny" class="absolute z-6 -bottom-24px -right-1px">
            <NButton type="primary" class="b-rd-0!" v-slots={{ icon: () => <span class="fc" v-html={icon.copy} /> }} />
            <NButton type="primary" class="b-rd-0!" v-slots={{ icon: () => <span class="fc" v-html={icon.delete} /> }} />
            <NButton type="primary" class="b-rd-0!" v-slots={{ icon: () => <span class="fc" v-html={icon.clear} /> }} />
          </NButtonGroup>
        )
      }
      </div>
    )
  },
})
