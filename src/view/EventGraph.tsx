import { defineComponent, ref } from 'vue'
import type { Elements } from '@vue-flow/core'
import { MiniMap } from '@vue-flow/minimap'
import { VueFlow, useVueFlow } from '@vue-flow/core'
import { Background, BackgroundVariant } from '@vue-flow/background'

import '@vue-flow/core/dist/style.css'
import '@vue-flow/core/dist/theme-default.css'
import '@vue-flow/minimap/dist/style.css'

export default defineComponent({
  inheritAttrs: false,
  name: 'EventGraph',
  setup() {
    const elements = ref<Elements>([
      { id: '1', type: 'input', label: 'Node 1', position: {
        x: 250,
        y: 120,
      } },
      { id: '2', type: 'output', label: 'Node 12', position: {
        x: 150,
        y: 200,
      } },
    ])

    const { addEdges, onConnect } = useVueFlow()

    onConnect(params => addEdges(params))

    return {
      elements,
    }
  },
  render() {
    return (
      <div class="h-[calc(100vh-60px)] w-full">
        <VueFlow v-model={this.elements} class="h-full w-full">
          <MiniMap />
          <Background patternColor="var(--divider-color)" variant={BackgroundVariant.Lines} />
        </VueFlow>
      </div>
    )
  },
})
