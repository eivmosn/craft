import {
  onDragStart,
} from 'src/shared/drag'
import {
  defineComponent,
} from 'vue'
import DndContainer from 'vuedraggable'
import type {
  DesignState,
} from './index'

export default defineComponent({
  inheritAttrs: false,
  name: 'Workbench',
  setup() {
    const design = inject<DesignState>('design', {} as DesignState)
    return {
      design,
    }
  },
  render() {
    const { background, targetList } = this.design
    return (
      <div class="h-[calc(100%-47px)] p-4px bg-#eee">
        <DndContainer
          group={{
            name: 'workspace',
          }}
          list={targetList.value}
          itemKey="id"
          forceFallback
          fallbackOnBody
          fallbackClass="ghost"
          onStart={onDragStart}
          ghostClass="indicator"
          animation={80}
          fallbackTolerance={5}
          scrollSensitivity={150}
          class={[
            'h-full bg-#fff fc-space gap-4px grid-content-start',
            'p-4px grid grid-cols-[repeat(24,minmax(0px,1fr))]',
            background.value,
          ]}
        >
          {{
            item: () => (
              <div
                style={{
                  gridColumn: 'span 12 / span 12',
                }}
                class="b h-50px fc p-5px w-full"
              >
                <div>123</div>
              </div>
            ),
          }}
        </DndContainer>
      </div>
    )
  },
})
