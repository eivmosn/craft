import { defineComponent } from 'vue'
import { NCollapse, NCollapseItem, NInput } from 'naive-ui'
import { Input, Password, Select, TextArea } from '../element'

export default defineComponent({
  inheritAttrs: false,
  name: 'WidgetPanel',
  setup() {

  },
  render() {
    // const SearchArea = () => {
    //   return (
    //     <div class="b-bottom b-[var(--border-color)] p-6px">
    //       <NInput
    //         placeholder="搜索组件"
    //         v-slots={{
    //           suffix: () => (
    //             <svg class="text-[var(--text-color-3)]" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 32 32">
    //               <path fill="currentColor" d="m29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29ZM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9Z" />
    //             </svg>
    //           ),
    //         }}
    //       />
    //     </div>
    //   )
    // }

    // const WidgetCard = () => {
    //   return (
    //     <div class="flex flex-col h-60px b b-rd-2px b-[var(--divider-color)] bg-[var(--action-color)] hover:bg-[var(--hover-color)]">
    //       <div class="flex-1 fc">
    //         <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 32 32"><path fill="currentColor" d="M2 28h28v2H2zm22.5-17H8a2.002 2.002 0 0 0-2 2v8a5.006 5.006 0 0 0 5 5h8a5.006 5.006 0 0 0 5-5v-1h.5a4.5 4.5 0 0 0 0-9zM22 21a3.003 3.003 0 0 1-3 3h-8a3.003 3.003 0 0 1-3-3v-8h14zm2.5-3H24v-5h.5a2.5 2.5 0 0 1 0 5zM19 9h-2v-.146a1.988 1.988 0 0 0-1.105-1.789L13.21 5.724A3.979 3.979 0 0 1 11 2.146V1h2v1.146a1.99 1.99 0 0 0 1.105 1.789l2.684 1.341A3.98 3.98 0 0 1 19 8.854z" /></svg>
    //       </div>
    //       <div class="py-2px px-5px text-12px text-center">组件名称</div>
    //     </div>
    //   )
    // }

    return (
      <div class="w-213px select-none b-right b-[var(--border-color)] bg-[var(--card-color)]">
        {
          Array.from({ length: 1 }).map(() => (
            <NCollapse arrowPlacement="right" defaultExpandedNames={['1']}>
              <NCollapseItem class="fc-collapse" title="容器" name="1">
                {/* <div class="grid p-8px grid-cols-3 gap-8px">
                  {
                    [Input, TextArea, Password, Select].map(WidgetCard)
                  }
                </div> */}
                <div class="min-h-20px"></div>
              </NCollapseItem>
            </NCollapse>
          ))
        }
      </div>
    )
  },
})
