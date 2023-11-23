import {
  NCollapse,
  NCollapseItem,
  NInput,
} from 'naive-ui'
import DndContainer from 'vuedraggable'
import {
  onDragStart,
} from 'src/shared/drag'

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
        label: 'ceec',
      },
      {
        label: 'ceec',
      },
      {
        label: 'ceec',
      },
    ])
    return {
      list,
    }
  },
  render() {
    return (
      <div class="h-full">
        <div class="b-bottom b-[var(--base-border-color)] p-6px">
          <NInput />
        </div>
        {
          Array.from({ length: 3 }).map(() => (
            <Collapse name="containers" title="组件测试">
              <DndContainer
                itemKey="id"
                sort={false}
                forceFallback
                fallbackOnBody
                list={this.list}
                animation={120}
                group={{
                  name: 'containers',
                  pull: 'clone',
                  put: false,
                }}
                fallbackClass="ghost"
                onStart={onDragStart}
                fallbackTolerance={5}
                class="grid grid-cols-[repeat(auto-fill,90px)] gap-8px items-center justify-center"
              >
                {{
                  item: () => (
                    <div class="h-88px select-none b gap-11px fc flex-col b-[var(--base-border-color)] hover:b-blue">
                      <div class="fc text-blue">
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 14v4.4a.6.6 0 0 0 .6.6H10m9-5v4.4a.6.6 0 0 1-.6.6H14m0-14h4.4a.6.6 0 0 1 .6.6V10M4 10V5.6a.6.6 0 0 1 .6-.6H10m4 14v1a2 2 0 1 1-4 0v-1m-6-9h1a2 2 0 1 1 0 4H4m15-4h1a2 2 0 1 1 0 4h-1m-5-9V4a2 2 0 1 0-4 0v1" /></svg>
                      </div>
                      <div class="px-5px max-w-90px op-80 truncate text-12px text-center">
                        组件名称
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
