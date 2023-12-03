import { defineComponent, onMounted, ref } from 'vue'
import { createResizer } from '@/state/resizer'

export default defineComponent({
  inheritAttrs: false,
  name: 'SettingPanel',
  setup() {
    const settingRef = ref<HTMLElement>()

    onMounted(() => createResizer(settingRef.value!, {
      position: 'left',
      minWidth: 300,
      maxWidth: 450,
    }))

    return {
      settingRef,
    }
  },
  render() {
    return (
      <div ref="settingRef" class="w-300px b-left b-[var(--border-color)] bg-[var(--card-color)]">

      </div>
    )
  },
})
