import { defineComponent } from 'vue'
import { NCollapse, NCollapseItem, NInput } from 'naive-ui'

export default defineComponent({
  inheritAttrs: false,
  name: 'WidgetPanel',
  setup() {

  },
  render() {
    const SearchArea = () => {
      return (
        <div class="b-bottom b-[var(--border-color)] p-10px">
          <NInput
            placeholder="搜索组件"
            v-slots={{
              suffix: () => (
                <svg class="text-[var(--text-color-3)]" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 32 32">
                  <path fill="currentColor" d="m29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29ZM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9Z" />
                </svg>
              ),
            }}
          />
        </div>
      )
    }

    const WidgetCard = () => {
      return (
        <div class="b b-rd-2px b-[var(--divider-color)] bg-[var(--action-color)] hover:bg-[var(--hover-color)] fc flex-col px-5px py-12px gap-10px">
          <div class="fc text-blue">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32"><path fill="currentColor" d="M26 12h-6V6a3.003 3.003 0 0 0-3-3h-2.133a2.01 2.01 0 0 0-1.98 1.717l-.845 5.917L8.465 16H2v14h21a7.008 7.008 0 0 0 7-7v-7a4.005 4.005 0 0 0-4-4ZM8 28H4V18h4Zm20-5a5.006 5.006 0 0 1-5 5H10V17.303l3.958-5.937l.91-6.366H17a1 1 0 0 1 1 1v8h8a2.002 2.002 0 0 1 2 2Z" /></svg>
          </div>
          <div class="text-12px text-[var(--text-color-3)]">栅格</div>
        </div>
      )
    }

    return (
      <div class="w-285px select-none b-right b-[var(--border-color)] bg-[var(--card-color)]">
        {SearchArea()}
        <NCollapse arrowPlacement="right" defaultExpandedNames={['1']}>
          <NCollapseItem class="fc-collapse" title="容器" name="1">
            <div class="grid p-8px grid-cols-3 gap-8px">
              {
                Array.from({ length: 6 }).map(WidgetCard)
              }
            </div>
          </NCollapseItem>
        </NCollapse>
        <NCollapse arrowPlacement="right" defaultExpandedNames={['1']}>
          <NCollapseItem class="fc-collapse" title="表单" name="1">
            <div class="min-h-120px"></div>
          </NCollapseItem>
        </NCollapse>
        <NCollapse arrowPlacement="right" defaultExpandedNames={['1']}>
          <NCollapseItem class="fc-collapse" title="自定义" name="1">
            <div class="min-h-120px"></div>
          </NCollapseItem>
        </NCollapse>
      </div>
    )
  },
})
