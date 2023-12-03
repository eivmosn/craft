import { defineComponent, onMounted, ref } from 'vue'
import { NCollapse, NCollapseItem, NInput } from 'naive-ui'
import { createResizer } from '@/state/resizer'

export default defineComponent({
  inheritAttrs: false,
  name: 'WidgetPanel',
  setup() {
    const widgetRef = ref<HTMLElement>()

    onMounted(() => createResizer(widgetRef.value!, {
      position: 'right',
      minWidth: 200,
      maxWidth: 450,
    }))

    return {
      widgetRef,
    }
  },
  render() {
    const SearchArea = () => {
      return (
        <div class="b-bottom b-[var(--border-color)] p-10px">
          <NInput
            placeholder="搜索组件"
            v-slots={{
              suffix: () => (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 32 32">
                  <path fill="currentColor" d="m29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29ZM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9Z" />
                </svg>
              ),
            }}
          />
        </div>
      )
    }
    return (
      <div ref="widgetRef" class="w-300px b-right b-[var(--border-color)] bg-[var(--card-color)]">
        {SearchArea()}
        <NCollapse arrowPlacement="right" defaultExpandedNames={['1']}>
          <NCollapseItem class="fc-collapse" title="容器" name="1">
            <div class="min-h-120px"></div>
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
