import { computed, ref } from 'vue'
import type { InjectionKey, Ref } from 'vue'

export interface DragState {
  dragging: Ref<boolean>
}

export const dragStateKey: InjectionKey<DragState> = Symbol('')

export function useDragState() {
  const dragging = ref<boolean>(false)
  const dragList = ref([])

  const background = computed(() => {
    return (dragList.value.length === 0 && dragging.value) && 'bg-blue-100'
  })

  return {
    dragging,
    dragList,
    background,
  }
}
