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
          class={['h-full bg-#fff fc-space', background.value]}
          list={targetList.value}
          itemKey="id"
          forceFallback
          fallbackOnBody
          fallbackClass="ghost"
          onStart={onDragStart}
          ghostClass="indicator"
        >
          {{
            item: () => <div class="b h-50px fc p-5px">2</div>,
          }}
        </DndContainer>
      </div>
    )
  },
})
