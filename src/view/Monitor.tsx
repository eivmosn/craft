import { NFormItem, NInput, NScrollbar } from 'naive-ui'
import { defineComponent, ref } from 'vue'
import { useDraggable } from 'vue-draggable-plus'
import type { FormCookWidget } from '../state/transform'
import Controller from './Controller'
import { createGhost } from '@/state/dnd'

export default defineComponent({
  inheritAttrs: false,
  name: 'Monitor',
  setup() {
    const targetRef = ref<HTMLElement | null>(null)
    const targetList = ref<FormCookWidget[]>([])

    const activeId = ref<string | null>(null)

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
        })
      },
      ghostClass: 'ghost-indicator',
      onAdd: (event) => {
        const index = event.newIndex as number
        const widget = targetList.value[index]
        activeId.value = widget.id
      },
    })

    return {
      activeId,
      targetRef,
      targetList,
    }
  },
  render() {
    return (
      <div class="flex-1 bg-[var(--fc-monitor)] p-6px select-none">
        <NScrollbar class="h-full bg-[var(--card-color)]">
          <div
            ref="targetRef"
            class={[
              'min-h-[calc(100vh-60px)] p-4px',
              'grid grid-cols-[repeat(24,minmax(0px,1fr))] grid-content-start gap-4px',
            ]}
          >
            {
              this.targetList.map(widget => (
                <Controller
                  key={widget.id}
                  active={this.activeId === widget.id}
                  onClick={() => this.activeId = widget.id}
                >
                  <NFormItem
                    class="w-full"
                    labelWidth={80}
                    showFeedback={false}
                    labelPlacement="left"
                    label={widget.label['zh-CN']}
                  >
                    <NInput />
                  </NFormItem>
                </Controller>
              ))
            }
          </div>
        </NScrollbar>
      </div>
    )
  },
})
