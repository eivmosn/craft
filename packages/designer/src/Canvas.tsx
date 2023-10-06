import { defineComponent, inject, toRefs, ref } from 'vue'
import { Controller } from "../../components";
import Draggable from "vuedraggable";
import { NFormItem, NInput, NScrollbar } from 'naive-ui';
import { capitalizeFirstLetter } from '@codepan/utils';
import Group from "./container/Group";
import Toolbar from "./Toolbar";
interface DndCanvasProps {
    className: string
}

export default defineComponent({
    name: 'Canvas',
    inheritAttrs: false,
    setup() {
        const designer = inject<{}>('designer')
        return {
            ...designer
        }
    },
    render() {

        const renderDndCanvas = (data: [], props?: DndCanvasProps) => {
            const { className = 'min-h-[calc(100vh-58px)]' } = props || {}
            return <Draggable
                list={data}
                itemKey='id'
                animation={60}
                group={{
                    name: 'material'
                }}
                swapThreshold={1}
                forceFallback={true}
                fallbackOnBody={true}
                fallbackTolerance={5}
                scrollSensitivity={150}
                fallbackClass='ghost-node'
                ghostClass='ghost-indicator'
                class={[className]}
                onAdd={(e) => {
                    console.log(e);
                }}
                style={{
                    margin: 0,
                    gap: '4px',
                    width: '100%',
                    padding: '4px',
                    display: 'grid',
                    alignContent: 'baseline',
                    gridTemplateColumns: 'repeat(24, minmax(0px, 1fr))',
                }}
            >
                {{
                    item: ({ element }) => <div style={{
                        gap: '20px',
                        gridColumn: 'span 24',
                    }}>
                        <Controller>
                            {renderWidget(element)}
                        </Controller>
                    </div>
                }}
            </Draggable>
        }

        const renderWidget = (widget: any) => {
            return <NFormItem
                label={capitalizeFirstLetter(widget.type)}
                labelWidth={80}
                showFeedback={false}
                labelPlacement="left"
                class='relative w-full before:(content-empty absolute inset-0 z-10)'
            >
                <NInput placeholder='Input...' />
            </NFormItem>
            // return <Group />
        }

        return <div class='flex-1 b-left b-right b-[var(--x-border)] bg-[var(--x-canvas)] min-w-318px'>
            <Toolbar />
            <div class='h-[calc(100%-48px)] p-4px'>
                <div class='h-full b-image-[var(--x-shining-v1),var(--x-shining-v2)] bg-[var(--x-background)]'>
                    <NScrollbar class='fit-edge'>
                        {renderDndCanvas(this.schema)}
                    </NScrollbar>
                </div>
            </div>
        </div>
    },
})
