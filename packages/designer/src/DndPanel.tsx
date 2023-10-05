import { NScrollbar } from 'naive-ui'
import { defineComponent } from 'vue'
import { Collapse } from '../../components'
import components, { enUs } from "./config";

export default defineComponent({
    name: 'DndPanel',
    setup() {

    },
    render() {
        return <div class='w-300px bg-[var(--x-background)]'>
            <NScrollbar>
                {
                    components.map(({ component, group }, index) => <Collapse name={`${group}-${index}`} title={enUs[group]}>
                        <div key={`${group}-${index}`} class='grid grid-cols-[repeat(auto-fill,90px)] gap-6px items-center justify-center'>
                            {
                                component.map((widget) => <div class='relative h-90px select-none b gap-14px fc flex-col b-[var(--x-border)] hover:b-blue'>
                                    <div class='fc text-blue' v-html={widget.icon} />
                                    <div class='px-5px text-[var(--x-color)] op-80 truncate text-12px text-center'>
                                        {enUs[widget.type]}
                                    </div>
                                </div>)
                            }
                        </div>
                    </Collapse>)
                }
            </NScrollbar>
        </div>
    },
})
