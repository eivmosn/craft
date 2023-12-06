import { defineComponent } from 'vue'

export default defineComponent({
  inheritAttrs: false,
  name: 'Monitor',
  setup() {

  },
  render() {
    return (
      <div class="flex-1 flex flex-col bg-[var(--fc-monitor)] p-8px">
        <div class="h-full bg-[var(--card-color)]">
          1
        </div>
      </div>
    )
  },
})
