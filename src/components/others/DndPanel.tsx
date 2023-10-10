import { defineComponent } from 'vue'
import { BaseScroll } from 'components/index'

export default defineComponent({
  name: 'DndPanel',
  inheritAttrs: false,
  setup() {

  },
  render() {
    return (<div class="min-w-199px w-300px b-right b-[var(--x-border)] bg-[var(--x-background)]">
      <div class="min-h-48px fs b-bottom b-[var(--x-border)] bg-[var(--x-background-light)] px-12px text-18px text-[var(--x-color)]">
        Components
      </div>
      <BaseScroll padding={6} fitEdge class="h-[calc(100%-48px)]">

      </BaseScroll>
    </div>)
  },
})
