import { defineComponent, nextTick, ref, watch } from 'vue'
import type { Elements, NodeProps } from '@vue-flow/core'
import { MiniMap } from '@vue-flow/minimap'
import { PanelPosition, VueFlow, useVueFlow } from '@vue-flow/core'
import { Controls } from '@vue-flow/controls'
import { Background, BackgroundVariant } from '@vue-flow/background'
import TableNode from './elements/TableNode'

import '@vue-flow/core/dist/style.css'
import '@vue-flow/core/dist/theme-default.css'
import '@vue-flow/minimap/dist/style.css'
import '@vue-flow/controls/dist/style.css'

export default defineComponent({
  inheritAttrs: false,
  name: 'EventGraph',
  setup() {
    const elements = ref<Elements>([
      {
        id: '1',
        type: 'table',
        label: 'Node 1',
        position: {
          x: 250,
          y: 120,
        },
      },
      {
        id: '2',
        type: 'output',
        label: '点击事件',
        position: {
          x: 150,
          y: 200,
        },
      },
      {
        id: '4',
        type: 'input',
        label: '关闭弹窗',
        position: {
          x: 150,
          y: 200,
        },
      },
      {
        id: '33',
        source: '1',
        target: '2',
        targetHandle: '1-handle-right-1',
        animated: true,
        label: '触发',
      },
    ])

    const {
      addNodes,
      findNode,
      addEdges,
      onConnect,
      project,
      vueFlowRef,
    } = useVueFlow()

    onConnect(params => addEdges(params))

    const onDrop = (event: MouseEvent) => {
      if (vueFlowRef.value) {
        const { left, top } = vueFlowRef.value.getBoundingClientRect()
        const position = project({
          x: event.clientX - left,
          y: event.clientY - top,
        })

        const freshNode = {
          id: new Date().getTime().toString(),
          type: 'input',
          position,
          label: '哈哈哈',
        }

        addNodes([freshNode])

        nextTick(() => {
          const node = findNode(freshNode.id)!
          const stop = watch(
            () => node.dimensions,
            (dimensions) => {
              if (dimensions.width > 0 && dimensions.height > 0) {
                node.position = { x: node.position.x - node.dimensions.width / 2, y: node.position.y - node.dimensions.height / 2 }
                stop()
              }
            },
            { deep: true, flush: 'post' },
          )
        })
      }
    }

    return {
      elements,
      onDrop,
    }
  },
  render() {
    return (
      <div class="h-[calc(100vh-60px)] w-full">
        <VueFlow
          v-model={this.elements}
          class="h-full w-full"
          v-slots={{
            'node-table': (props: NodeProps) => <TableNode {...props} />,
          }}
        >
          <MiniMap />
          <Controls position={PanelPosition.TopRight} />
          <Background patternColor="var(--divider-color)" variant={BackgroundVariant.Lines} />
        </VueFlow>
      </div>
    )
  },
})
