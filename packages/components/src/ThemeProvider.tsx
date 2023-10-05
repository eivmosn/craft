import {
    NConfigProvider, darkTheme, lightTheme,
} from 'naive-ui'
import {
    renderSlot,
    defineComponent,
    computed,
} from "vue";
import { useDark, useToggle } from "@vueuse/core";

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
        const dark = useDark()
        const toggle = useToggle(dark)

        const theme = computed(()=> {
            return dark.value ? darkTheme : lightTheme
        })

        toggle()

        return {
            theme
        }

    },
    render() {
        return <NConfigProvider theme={this.theme}>
            <GlobalInject>
                {renderSlot(this.$slots, 'default')}
            </GlobalInject>
        </NConfigProvider>
    },
})
