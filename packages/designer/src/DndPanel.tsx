import { NScrollbar } from 'naive-ui'
import { defineComponent } from 'vue'
import Draggable from "vuedraggable";
import { Collapse } from '../../components'
import components, { enUs } from "./config";
import { onDragClone } from "./event";
import TitlePanel from "./container/TitlePanel";

export default defineComponent({
    name: 'DndPanel',
    inheritAttrs: false,
    render() {
        return <TitlePanel title='Components' class='b-left b-[var(--x-border)] min-w-199px'>
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
                            clone={onDragClone}
                            forceFallback={true}
                            fallbackOnBody={true}
                            fallbackTolerance={5}
                            fallbackClass='ghost-node'
                            itemKey={`${group}-${index}`}
                            onStart={(node) => {
                                console.log(node);
                            }}
                            class='grid grid-cols-[repeat(auto-fill,93px)] gap-4px items-center justify-center'
                        >
                            {{
                                item: ({ element }) => <div
                                    class='relative bg-[var(--x-background)] h-93px select-none b gap-14px fc flex-col b-[var(--x-border)] hover:b-blue'>
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
        </TitlePanel>
    },
})
