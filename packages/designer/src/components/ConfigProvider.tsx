import { defineComponent, renderSlot } from "vue";
import {
    NConfigProvider,
} from 'naive-ui'
import { theme } from "../event";

export default defineComponent({
    render() {
        return <NConfigProvider theme={theme.value} class='h-full bg-[var(--x-background-deep)]'>
            {renderSlot(this.$slots, 'default')}
        </NConfigProvider>
    }
})