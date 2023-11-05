import { defineComponent, ref } from 'vue'

export default defineComponent({
  inheritAttrs: false,
  name: 'FcMonitor',
  setup() {
    const list = ref([])
    return {
      list,
    }
  },
  render() {
    return (
      <div class="h-[calc(100%-48px)] bg-[var(--fc-background-deep)] p-4px">
        <div class="h-full b bg-[var(--fc-background-light)]">
        </div>
      </div>
    )
  },
})
