import { defineComponent, onMounted, ref } from 'vue'
import { createResizer } from '../events'

export default defineComponent({
  inheritAttrs: false,
  name: 'Settings',
  setup() {
    const settingsRef = ref<HTMLElement>()
    onMounted(() => createResizer(settingsRef.value!, {
      position: 'left',
      minWidth: 300,
      maxWidth: 450,
    }))
    return {
      settingsRef,
    }
  },
  render() {
    return (
      <div ref="settingsRef" class="w-300px bg-[var(--fc-background-content)] b-left b-[var(--fc-border-base)]">

      </div>
    )
  },
})
