import { defineComponent, onMounted, ref } from 'vue'
import { createResizer } from '../events'
import Collapse from './Collapse'

export default defineComponent({
  inheritAttrs: false,
  name: 'Component',
  setup() {
    const componentRef = ref<HTMLElement>()
    onMounted(() => createResizer(componentRef.value!, {
      position: 'right',
      minWidth: 120,
      maxWidth: 300,
    }))
    return {
      componentRef,
    }
  },
  render() {
    const DragCard = () => {
      return (
        <div title="连接器取值" class="select-none fs bg-[rgba(0,102,255,.08)] b-[var(--fc-border-base)] b-rd-3px gap-2px px-4px py-8px">
          <div class="fc text-18px text-#1055ff">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32">
              <path fill="currentColor" d="M16 24v-2a3.296 3.296 0 0 0 3-3h2a5.267 5.267 0 0 1-5 5Z" />
              <path fill="currentColor" d="M16 28a9.011 9.011 0 0 1-9-9a9.984 9.984 0 0 1 1.494-4.955l6.659-10.608a1.04 1.04 0 0 1 1.694 0l6.63 10.556A10.063 10.063 0 0 1 25 19a9.011 9.011 0 0 1-9 9Zm0-22.152l-5.782 9.208A7.977 7.977 0 0 0 9 19a7 7 0 0 0 14 0a8.062 8.062 0 0 0-1.248-3.995Z" />
            </svg>
          </div>
          <div class="flex-1 text-12px text-#314666">连接器取值</div>
        </div>
      )
    }

    return (
      <div class="w-300px bg-[var(--fc-background-content)] b-right b-[var(--fc-border-base)]">
        <Collapse name="sn" title="组件库">
          <DragCard />
          <DragCard />
          <DragCard />
          <DragCard />
          <DragCard />
        </Collapse>
      </div>
    )
  },
})
