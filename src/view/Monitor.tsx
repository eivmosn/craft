import { NFormItem, NInput, NScrollbar } from 'naive-ui'
import type { PropType } from 'vue'
import { computed, defineComponent, ref, renderList } from 'vue'
import { useDraggable } from 'vue-draggable-plus'
import Controller from './Controller'
import Grid from './components/Grid'
import { type FormCookWidget, isContainerType } from '@/state/transform'
import { createGhost } from '@/state/dnd'
import LaptopInput from '@/components/input/Laptop'
import LaptopSelect from '@/components/select/Laptop'

export default defineComponent({
  inheritAttrs: false,
  name: 'Monitor',
  props: {
    size: {
      type: String as PropType<'laptop' | 'tablet' | 'mobile'>,
      default: 'laptop',
    },
  },
  setup(props) {
    const targetRef = ref<HTMLElement | null>(null)
    const targetList = ref<FormCookWidget[]>([])
    const activeId = ref<string | null>(null)

    const width = computed(() => {
      const platform = {
        laptop: '',
        tablet: '768px',
        mobile: '375px',
      }
      return platform[props.size]
    })

    // useDraggable(targetRef, targetList, {
    //   group: {
    //     name: 'widget',
    //   },
    //   forceFallback: true,
    //   fallbackOnBody: true,
    //   fallbackTolerance: 5,
    //   scrollSensitivity: 150,
    //   onStart: (event) => {
    //     const index = event.oldIndex as number
    //     const widget = targetList.value[index]
    //     createGhost((event as unknown as { originalEvent: MouseEvent }).originalEvent, {
    //       widget,
    //     })
    //   },
    //   ghostClass: 'ghost-indicator',
    //   onAdd: (event) => {
    //     const index = event.newIndex as number
    //     const widget = targetList.value[index]
    //     activeId.value = widget.id
    //   },
    // })

    return {
      width,
      activeId,
      targetRef,
      targetList,
    }
  },
  render() {
    return (
      <div
        class="flex-1 bg-[var(--fc-monitor)] p-6px select-none min-w-200px"
      >
        {/* size wrapper */}
        <div
          style={{
            width: this.width,
          }}
          class="bg-[var(--card-color)] ma h-full"
        >
          {/* scrollbar */}
          <NScrollbar>
            <div
              ref="targetRef"
              class={[
                'min-h-[calc(100vh-60px)] p-4px ma bg-[var(--card-color)]',
                'grid grid-cols-1 gap-4px grid-content-start',
                // 'grid grid-cols-[repeat(24,minmax(0px,1fr))] grid-content-start gap-4px',
              ]}
              style={{
                width: this.width,
              }}
            >
              {
                this.targetList.map(() => (
                  <Grid />
                ))
              }
              <LaptopInput clearable />
              <LaptopSelect clearable />
            </div>
          </NScrollbar>
        </div>
      </div>
    )
  },
})
