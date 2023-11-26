import { defineComponent, onMounted, ref } from 'vue'
import { createResizer } from '../events'

export default defineComponent({
  inheritAttrs: false,
  name: 'SourceCode',
  setup() {
    const sourceCodeRef = ref<HTMLElement>()
    onMounted(() => createResizer(sourceCodeRef.value!, {
      position: 'right',
      minWidth: 120,
      maxWidth: 600,
    }))
    return {
      sourceCodeRef,
    }
  },
  render() {
    return (
      <div ref="sourceCodeRef" class="w-300px bg-[var(--fc-background-content)] b-right b-[var(--fc-border-base)]">
        code
      </div>
    )
  },
})
