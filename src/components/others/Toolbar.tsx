import { NButton } from 'naive-ui'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Toolbar',
  setup() {

  },
  render() {
    return (<div class="min-h-48px fb b-bottom b-[var(--x-border)] bg-[var(--x-background-light)] px-5px">
      <div class="flex gap-8px">
        <NButton>Export</NButton>
        <NButton>Reset</NButton>
        <NButton>Import</NButton>
        <NButton>Preview</NButton>
      </div>
    </div>)
  },
})
