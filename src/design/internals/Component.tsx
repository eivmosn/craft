import { defineComponent, onMounted, ref } from 'vue'
import { createResizer } from '../events'

export default defineComponent({
  inheritAttrs: false,
  name: 'Component',
  setup() {
    const componentRef = ref<HTMLElement>()
    onMounted(() => createResizer(componentRef.value!, {
      position: 'right',
      minWidth: 120,
      maxWidth: 300,
    }))
    return {
      componentRef,
    }
  },
  render() {
    return (
      <div ref="componentRef" class="w-300px bg-[var(--fc-background-content)] b-right b-[var(--fc-border-base)]">

      </div>
    )
  },
})
