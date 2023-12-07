import { NScrollbar } from 'naive-ui'
import { defineComponent, ref } from 'vue'
import { useDraggable } from 'vue-draggable-plus'
import { createGhost } from '@/state/dnd'

export default defineComponent({
  inheritAttrs: false,
  name: 'Monitor',
  setup() {
    const targetRef = ref<HTMLElement | null>(null)
    const targetList = ref([])

    useDraggable(targetRef, targetList, {
      group: {
        name: 'widget',
      },
      ghostClass: 'ghost',
      forceFallback: true,
      fallbackOnBody: true,
      fallbackTolerance: 5,
      scrollSensitivity: 150,
      onStart: (event) => {
        const index = event.oldIndex as number
        const widget = targetList.value[index]
        createGhost((event as unknown as { originalEvent: MouseEvent }).originalEvent, {
          widget,
          offsetTop: 10,
          offsetLeft: 10,
        })
      },
    })

    return {
      targetRef,
      targetList,
    }
  },
  render() {
    return (
      <NScrollbar class="flex-1 bg-[var(--fc-monitor)]">
        <div class="p-8px">
          <div
            ref="targetRef"
            class={[
              'p-4px bg-[var(--card-color)] min-h-[calc(100vh-64px)]',
              'grid grid-cols-[repeat(24,minmax(0px,1fr))] grid-content-start gap-4px',
            ]}
          >
            {
              this.targetList.map((item: any) => (
                <div
                  class="b min-h-55px"
                  style="grid-column: span 12 / span 12"
                >
                  {item.type}
                </div>
              ))
            }
          </div>
        </div>
      </NScrollbar>
    )
  },
})
