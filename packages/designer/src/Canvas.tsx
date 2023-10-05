import { defineComponent, inject, toRefs, ref } from 'vue'
import { Controller } from "../../components";
import Draggable from "vuedraggable";
import { NFormItem, NInput, NScrollbar } from 'naive-ui';
import { capitalizeFirstLetter } from '@codepan/utils';
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
            const { className = 'min-h-[calc(100vh-14px)]' } = props || {}
            return <Draggable
                list={data}
                itemKey='id'
                animation={80}
                group={{
                    name: 'material'
                }}
                forceFallback={true}
                fallbackOnBody={true}
                fallbackTolerance={5}
                scrollSensitivity={150}
                fallbackClass='ghost-node'
                ghostClass='ghost-indicator'
                class={['p-4px', className]}
                onAdd={(e) => {
                    console.log(e);
                }}
            >
                {{
                    item: ({ element }) => <Controller>
                        {renderWidget(element)}
                    </Controller>
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
        }

        return <div class='flex-1 p-6px b-left b-right b-[var(--x-border)] bg-[var(--x-canvas)] min-w-320px'>
            <div class='h-full b-image-[var(--x-shining-v1),var(--x-shining-v2)] bg-[var(--x-background)]'>
                <NScrollbar class='fit-edge'>
                    {renderDndCanvas(this.schema)}
                </NScrollbar>
            </div>
        </div>
    },
})
