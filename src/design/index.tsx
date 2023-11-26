import { defineComponent, ref } from 'vue'
import { NButton, NButtonGroup } from 'naive-ui'
import { ToolButton } from './misc'
import { Component, Navigation, Settings, SourceCode } from './internals'

export default defineComponent({
  inheritAttrs: false,
  name: 'index',
  setup() {
    const active = ref('component')
    const onClick = (name: string) => active.value = name
    return {
      active,
      onClick,
    }
  },
  render() {
    return (
      <div class="h-full bg-[var(--fc-background-base)] flex">
        <Navigation onClick={this.onClick} />
        {
          this.active === 'component' ? <Component /> : <SourceCode />
        }
        <div class="flex-1 h-full flex flex-col min-w-140px">
          {/* <div class="b-bottom b-[var(--fc-border-base)] bg-[var(--fc-background-content)] fb gap-2px px-5px py-6px">
            <div class="pr-5px">
              <NButtonGroup size="small">
                <NButton>重置</NButton>
                <NButton type="primary">预览</NButton>
              </NButtonGroup>
            </div>
          </div> */}
          <div class="h-full p-8px bg-[var(--fc-background-dark)]">
            <div class="b b-[var(--fc-border-base)] h-full bg-[var(--fc-background-content)]">

            </div>
          </div>
        </div>
        <Settings />
      </div>
    )
  },
})
