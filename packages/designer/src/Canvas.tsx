import { defineComponent } from 'vue'
import { Controller } from "../../components";
import Draggable from "vuedraggable";
import { NScrollbar } from 'naive-ui';

export default defineComponent({
    name: 'Canvas',
    inheritAttrs: false,
    setup() {

    },
    render() {
        return <div class='flex-1 p-6px b-left b-right b-[var(--x-border)] bg-[var(--x-canvas)] min-w-320px'>
            <div class='h-full b-image-[var(--x-shining-v1),var(--x-shining-v2)] bg-[var(--x-background)]'>
                <NScrollbar class='fit-edge'>
                    <Draggable
                        list={[1]}
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
                        class='min-h-[calc(100vh-14px)] p-4px'
                    >
                        {{
                            item: () => <Controller />
                        }}
                    </Draggable>
                </NScrollbar>
            </div>
        </div>
    },
})
