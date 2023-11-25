import { defineComponent, onMounted, ref } from 'vue'
import Navigation from './internals/Navigation'
import { createResizer } from './events/ResizeEvent'

export default defineComponent({
  inheritAttrs: false,
  name: 'index',
  setup() {
    const keRef = ref<HTMLElement>()
    const ketRef = ref<HTMLElement>()

    onMounted(() => {
      createResizer(ketRef.value!, {
        position: 'left',
        maxWidth: 450,
        minWidth: 300,
      })
    })
    return {
      keRef,
      ketRef,
    }
  },
  render() {
    return (
      <div class="h-full bg-[var(--fc-background-base)] flex">
        <Navigation />
        <div ref="keRef" class="w-300px bg-[var(--fc-background-content)] b-right b-[var(--fc-border-base)]">

        </div>
        <div class="flex-1">
          13
        </div>
        <div ref="ketRef" class="w-300px bg-[var(--fc-background-content)] b-left b-[var(--fc-border-base)]">
          123
        </div>
      </div>
    )
  },
})
