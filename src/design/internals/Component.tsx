import { defineComponent, onMounted, ref } from 'vue'
import { createResizer } from '../events'
import Collapse from './Collapse'
import DragWrapper from './DragWrapper'

export default defineComponent({
  inheritAttrs: false,
  name: 'Component',
  setup() {
    const dataList = ref([
      {
        id: '001',
        name: 1,
      },
      {
        id: '002',
        name: 2,
      },
    ])
    const componentRef = ref<HTMLElement>()
    onMounted(() => {
      createResizer(componentRef.value!, {
        position: 'right',
        minWidth: 120,
        maxWidth: 300,
      })
    })
    return {
      dataList,
      componentRef,
    }
  },
  render() {
    const DragCard = () => {
      return (
        <div class="drag-item relative b-rd-4px bg-[var(--x-background)] h-90px select-none b gap-10px fc flex-col b-[var(--fc-border-base)] hover:b-blue">
          <div class="fc text-blue">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 32 32">
              <path fill="currentColor" d="m22.509 12.689l-6-3.55a.997.997 0 0 0-1.018.001l-6 3.55a.998.998 0 0 0-.491.86v6.9c0 .354.187.681.491.86l6 3.55a.989.989 0 0 0 1.018 0l6-3.55a.998.998 0 0 0 .491-.86v-6.9a1 1 0 0 0-.491-.861zM21 19.88l-5 2.958l-5-2.958v-5.76l5-2.958l5 2.958v5.76z" />
              <path fill="currentColor" d="M6 20.184V11.07l6.2-3.664l-1.017-1.722l-6.692 3.955A1 1 0 0 0 4 10.5v9.684A2.996 2.996 0 0 0 2 23c0 1.654 1.346 3 3 3s3-1.346 3-3a2.996 2.996 0 0 0-2-2.816zM5 24a1.001 1.001 0 0 1 0-2a1.001 1.001 0 0 1 0 2zm22-4c-1.654 0-3 1.346-3 3c0 .353.072.687.185 1.002L16 28.838l-6.404-3.784l-1.017 1.722l6.912 4.084a.997.997 0 0 0 1.018.001l8.96-5.295c.45.269.97.434 1.531.434c1.654 0 3-1.346 3-3s-1.346-3-3-3zm0 4a1.001 1.001 0 0 1 0-2a1.001 1.001 0 0 1 0 2zM16 7c.731 0 1.392-.273 1.913-.708L26 11.071V18h2v-7.5a1 1 0 0 0-.491-.861l-8.567-5.062C18.978 4.39 19 4.198 19 4c0-1.654-1.346-3-3-3s-3 1.346-3 3s1.346 3 3 3zm0-4a1.001 1.001 0 1 1-1 1c0-.552.449-1 1-1z" />
            </svg>
          </div>
          <div class="px-5px max-w-80px text-[var(--fc-text-color)] op-80 truncate text-12px text-center">
            组件名称组
          </div>
        </div>
      )
    }

    return (
      <div class="w-300px bg-[var(--fc-background-content)] b-right b-[var(--fc-border-base)]">
        <Collapse name="sn" title="容器">
          <DragWrapper
            list={this.dataList}
            class="grid grid-cols-[repeat(auto-fill,90px)] py-8px gap-6px items-center justify-center"
          >
            <DragCard />
          </DragWrapper>
        </Collapse>
      </div>
    )
  },
})
