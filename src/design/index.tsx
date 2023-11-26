import { defineComponent } from 'vue'
import { NButton, NButtonGroup } from 'naive-ui'
import { ToolButton } from './misc'
import { Component, Navigation, Settings } from './internals'

export default defineComponent({
  inheritAttrs: false,
  name: 'index',
  render() {
    return (
      <div class="h-full bg-[var(--fc-background-base)] flex">
        <Navigation />
        <Component />
        <div class="flex-1 h-full flex flex-col">
          <div class="b-bottom b-[var(--fc-border-base)] bg-[var(--fc-background-content)] fb gap-2px px-5px py-6px">
            <div>
              <ToolButton icon="undo" name="撤销" />
              <ToolButton icon="redo" name="重做" />
            </div>
            <div>
              <ToolButton icon="laptop" name="电脑端" />
              <ToolButton icon="tablet" name="平板" />
              <ToolButton icon="mobile" name="手机端" />
            </div>
            <div class="pr-5px">
              <NButtonGroup size="small">
                <NButton>重置</NButton>
                <NButton type="primary">预览</NButton>
              </NButtonGroup>
            </div>
          </div>
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
