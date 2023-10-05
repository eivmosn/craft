import { defineComponent, inject } from 'vue'

export default defineComponent({
  name: 'DndPanel',
  setup() {
    const designer = inject<{}>('designer')
    return {
      ...designer
    }
  },
  render() {
    return <div class='w-315px bg-[var(--x-background)]'>
      {
        JSON.stringify(this.schema)
      }
    </div>
  },
})
