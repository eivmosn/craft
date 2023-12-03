import { defineComponent, onMounted, ref } from 'vue'
import { createResizer } from '@/state/resizer'

export default defineComponent({
  inheritAttrs: false,
  name: 'WidgetPanel',
  setup() {
    const widgetRef = ref<HTMLElement>()

    onMounted(() => createResizer(widgetRef.value!, {
      position: 'right',
      minWidth: 200,
      maxWidth: 450,
    }))

    return {
      widgetRef,
    }
  },
  render() {
    return (
      <div ref="widgetRef" class="w-300px b-right b-[var(--border-color)] bg-[var(--card-color)]">

      </div>
    )
  },
})
