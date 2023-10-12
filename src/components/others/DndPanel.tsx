import { defineComponent } from 'vue'
import { BaseScroll } from 'components/index'
import RenderDnd from 'vuedraggable'

export default defineComponent({
  name: 'DndPanel',
  inheritAttrs: false,
  setup() {

  },
  render() {
    const widget: Draggable.Slot = {
      item: () => (<div
        class="relative h-93px fc flex-col select-none gap-14px b b-[var(--x-border)] bg-[var(--x-background)] hover:b-blue"
      >
        <div class="fc text-blue" />
        <div class="truncate px-5px text-center text-12px text-[var(--x-color)] op-80">
          sd
        </div>
      </div>),
    }

    const dnd = () => {
      return (<RenderDnd
        itemKey="1"
        group={{
          put: false,
          pull: 'clone',
          name: 'material',
        }}
        sort={false}
        list={[1, 2, 4, 5, 6, 7]}
        forceFallback
        fallbackOnBody
        v-slots={widget}
        fallbackTolerance={5}
        class="grid grid-cols-[repeat(auto-fill,93px)] items-center justify-center gap-4px"
      />)
    }

    return (<div class="min-w-199px w-300px b-right b-[var(--x-border)] bg-[var(--x-background)]">
      <div class="min-h-48px fs b-bottom b-[var(--x-border)] bg-[var(--x-background-light)] px-12px text-18px text-[var(--x-color)]">
        Components
      </div>
      <BaseScroll padding={6} fitEdge class="h-[calc(100%-48px)]">
        {dnd()}
      </BaseScroll>
    </div>)
  },
})
