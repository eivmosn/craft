import { NScrollbar } from 'naive-ui'
import { defineComponent } from 'vue'
import Draggable from "vuedraggable";
import { Collapse } from '../../components'
import components, { enUs } from "./config";

export default defineComponent({
    name: 'DndPanel',
    inheritAttrs: false,
    render() {
        return <div class='w-300px bg-[var(--x-background)]'>
            <NScrollbar class='fit-edge'>
                {
                    components.map(({ component, group }, index) => {
                        return <Collapse
                            title={enUs[group]}
                            border={index !== 0}
                            name={`${group}-${index}`}
                        >
                            <Draggable
                                group={{
                                    put: false,
                                    pull: 'clone',
                                    name: 'material',
                                }}
                                sort={false}
                                list={component}
                                forceFallback={true}
                                fallbackOnBody={true}
                                fallbackTolerance={5}
                                scrollSensitivity={150}
                                fallbackClass='ghost-node'
                                itemKey={`${group}-${index}`}
                                class='grid grid-cols-[repeat(auto-fill,90px)] gap-6px items-center justify-center'
                            >
                                {{
                                    item: ({ element }) => <div class='relative bg-[var(--x-background)] h-90px select-none b gap-14px fc flex-col b-[var(--x-border)] hover:b-blue'>
                                        <div class='fc text-blue' v-html={element.icon} />
                                        <div class='px-5px text-[var(--x-color)] op-80 truncate text-12px text-center'>
                                            {enUs[element.type]}
                                        </div>
                                    </div>
                                }}
                            </Draggable>
                        </Collapse>
                    })
                }
            </NScrollbar>
        </div>
    },
})
