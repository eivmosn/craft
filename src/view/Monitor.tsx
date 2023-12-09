import { NScrollbar } from 'naive-ui'
import { defineComponent, ref } from 'vue'
import { useDraggable } from 'vue-draggable-plus'
import Controller from './Controller'
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
      ghostClass: 'ghost-indicator',
    })

    return {
      targetRef,
      targetList,
    }
  },
  render() {
    return (
      <div class="flex-1 bg-[var(--fc-monitor)] p-6px">
        <NScrollbar class="h-full bg-[var(--card-color)]">
          <div
            ref="targetRef"
            class={[
              'min-h-[calc(100vh-60px)] p-4px',
              'grid grid-cols-[repeat(24,minmax(0px,1fr))] grid-content-start gap-4px',
            ]}
          >
            {
              this.targetList.map(() => (
                <Controller>
                  123
                </Controller>
                // <div
                //   class="b min-h-55px"
                //   style="grid-column: span 12 / span 12"
                // >
                //   {item.type}
                // </div>
              ))
            }
          </div>
        </NScrollbar>
      </div>
    )
  },
})
