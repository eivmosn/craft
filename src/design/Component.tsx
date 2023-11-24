import {
  NCollapse,
  NCollapseItem,
  NInput,
} from 'naive-ui'
import DndContainer from 'vuedraggable'
import {
  onDragStart,
} from './events/DragEvent'
import type {
  DesignState,
} from './index'

const Collapse = defineComponent({
  inheritAttrs: false,
  props: {
    title: String,
    name: {
      type: [String, Number],
      default: '',
    },
  },
  render() {
    return (
      <NCollapse
        displayDirective="show"
        defaultExpandedNames={[this.name]}
      >
        <NCollapseItem
          name={this.name}
          title={this.title}
          class="fc-collapse"
          displayDirective="show"
        >
          <div class="py-8px">
            {this.$slots.default?.()}
          </div>
        </NCollapseItem>
      </NCollapse>
    )
  },
})

export default defineComponent({
  inheritAttrs: false,
  name: 'ComponentPanel',
  setup() {
    const list = ref([
      {
        id: '12',
        name: '组件1',
      },
      {
        id: '321',
        name: '组件2',
      },
      {
        id: '223',
        name: '组件3',
      },
    ])
    const design = inject<DesignState>('design', {} as DesignState)
    return {
      list,
      design,
    }
  },
  render() {
    const { draging } = this.design
    return (
      <div class="h-full">
        <div class="b-bottom b-[var(--base-border-color)] p-6px">
          <NInput />
        </div>
        {
          Array.from({ length: 1 }).map(() => (
            <Collapse name="containers" title="组件测试">
              <DndContainer
                itemKey="id"
                sort={false}
                forceFallback
                fallbackOnBody
                list={this.list}
                group={{
                  name: 'workspace',
                  pull: 'clone',
                  put: false,
                }}
                fallbackClass="ghost"
                onStart={(event) => {
                  draging.value = true
                  onDragStart(event)
                }}
                scrollSensitivity={150}
                onEnd={() => draging.value = false}
                fallbackTolerance={5}
                class="grid grid-cols-[repeat(auto-fill,90px)] gap-8px items-center justify-center"
              >
                {{
                  item: ({ element }: any) => (
                    <div class="h-80px select-none b gap-11px fc flex-col b-[var(--base-border-color)]">
                      <div class="fc text-#606266">
                        <svg width="28" height="28" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 14v4.4a.6.6 0 0 0 .6.6H10m9-5v4.4a.6.6 0 0 1-.6.6H14m0-14h4.4a.6.6 0 0 1 .6.6V10M4 10V5.6a.6.6 0 0 1 .6-.6H10m4 14v1a2 2 0 1 1-4 0v-1m-6-9h1a2 2 0 1 1 0 4H4m15-4h1a2 2 0 1 1 0 4h-1m-5-9V4a2 2 0 1 0-4 0v1" /></svg>
                      </div>
                      <div class="px-5px max-w-90px op-80 truncate text-12px text-center">
                        组件
                        {element.id}
                      </div>
                    </div>
                  ),
                }}
              </DndContainer>
            </Collapse>
          ))
        }
      </div>
    )
  },
})
