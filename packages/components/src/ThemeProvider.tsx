import {
    NConfigProvider,
} from 'naive-ui'
import {
    renderSlot,
    defineComponent,
} from "vue";

export const GlobalInject = defineComponent({
    name: 'GlobalInject',
    inheritAttrs: false,
    setup() {

    },
    render() {
        return renderSlot(this.$slots, 'default')
    }
})

export default defineComponent({
    name: 'ThemeProvider',
    inheritAttrs: false,
    setup() {

    },
    render() {
        return <NConfigProvider>
            <GlobalInject>
                {renderSlot(this.$slots, 'default')}
            </GlobalInject>
        </NConfigProvider>
    },
})
