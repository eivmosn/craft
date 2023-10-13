import { defineComponent, renderSlot } from 'vue'
import BaseScroll from './BaseScroll'

export default defineComponent({
  name: 'Workspace',
  inheritAttrs: false,
  setup() {

  },
  render() {
    return (<div class="min-w-318px flex-1">
      {renderSlot(this.$slots, 'toolbar')}
      <div class="h-[calc(100%-48px)] bg-[var(--x-background-deep)] p-5px">
        <div class="h-full b b-[var(--x-border)] bg-[var(--x-background)]">
          <BaseScroll>
            123
          </BaseScroll>
        </div>
      </div>
    </div>)
  },
})
