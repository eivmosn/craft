import { defineComponent, renderSlot } from "vue";
import {
    NConfigProvider,
} from 'naive-ui'

export default defineComponent({
    render() {
        return <NConfigProvider class='h-full bg-[var(--x-background-deep)]'>
            {renderSlot(this.$slots, 'default')}
        </NConfigProvider>
    }
})