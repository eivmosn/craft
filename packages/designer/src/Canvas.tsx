import { defineComponent } from 'vue'
import { Controller } from "../../components";
import Draggable from "vuedraggable";

export default defineComponent({
    name: 'Canvas',
    inheritAttrs: false,
    setup() {

    },
    render() {
        return <div class='flex-1 p-6px b-left b-right b-[var(--x-border)] bg-[var(--x-canvas)] min-w-320px'>
            <div class='h-full p-4px b-image-[var(--x-shining-v1),var(--x-shining-v2)] bg-[var(--x-background)]'>
                <Draggable 
                    itemKey='id' 
                    list={[1]}
                    forceFallback={true}
                    fallbackOnBody={true}
                    fallbackTolerance={5}
                    scrollSensitivity={150}
                    fallbackClass='ghost-component'
                >
                    {{
                        item: ()=> <Controller/>
                    }}
                </Draggable>
            </div>
        </div>
    },
})
