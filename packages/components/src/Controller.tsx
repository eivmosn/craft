import { NButton, NButtonGroup, NFormItem, NInput } from "naive-ui"
import { defineComponent, renderSlot } from "vue"

const AddonsMap = [
    {
        type: 'copy',
        show: true,
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024"><path fill="currentColor" d="M752 240H144c-17.7 0-32 14.3-32 32v608c0 17.7 14.3 32 32 32h608c17.7 0 32-14.3 32-32V272c0-17.7-14.3-32-32-32zm-40 600H184V312h528v528zm168-728H264c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h576v576c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V144c0-17.7-14.3-32-32-32zM300 550h296v64H300z"/></svg>',
    },
    {
        type: 'delete',
        show: true,
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024"><path fill="currentColor" d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"/></svg>',
    },
    {
        type: 'clean',
        show: true,
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024"><path fill="currentColor" d="m899.1 869.6l-53-305.6H864c14.4 0 26-11.6 26-26V346c0-14.4-11.6-26-26-26H618V138c0-14.4-11.6-26-26-26H432c-14.4 0-26 11.6-26 26v182H160c-14.4 0-26 11.6-26 26v192c0 14.4 11.6 26 26 26h17.9l-53 305.6c-.3 1.5-.4 3-.4 4.4c0 14.4 11.6 26 26 26h723c1.5 0 3-.1 4.4-.4c14.2-2.4 23.7-15.9 21.2-30zM204 390h272V182h72v208h272v104H204V390zm468 440V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H416V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H202.8l45.1-260H776l45.1 260H672z"/></svg>'
    }
]

export const Addons = defineComponent({
    name: 'Addons',
    inheritAttrs: false,
    render() {
        return <NButtonGroup size='tiny' class="absolute right-0px bottom-0px z-10">
            {
                AddonsMap.map((addon) => <NButton type="primary" class='b-rd-0' v-slots={{ icon: () => <div class='fc' v-html={addon.icon} /> }} />)
            }
        </NButtonGroup>
    }
})

export default defineComponent({
    name: 'Controller',
    render() {
        return <div class='b select-none min-h-55px b-blue relative bg-[var(--x-background)] fc p-5px'>
            {renderSlot(this.$slots, 'default')}
            <Addons />
        </div>
    },
})
