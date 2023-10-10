import { defineComponent, renderSlot } from 'vue'

export default defineComponent({
  name: 'Workspace',
  inheritAttrs: false,
  setup() {

  },
  render() {
    return (<div class="min-w-318px flex-1">
      {renderSlot(this.$slots, 'toolbar')}
      <div class="h-[calc(100%-48px)] p-5px">
        <div class="h-full b b-[var(--x-border)] bg-[var(--x-background)]">

        </div>
      </div>
    </div>)
  },
})
