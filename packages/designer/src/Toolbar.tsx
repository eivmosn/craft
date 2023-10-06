import { NButton } from 'naive-ui'
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'Toolbar',
    setup() {

    },
    render() {
        return <div class='h-48px px-12px fe b-bottom b-[var(--x-border)] bg-[var(--x-background)]'>
            <NButton type='primary'>Save</NButton>
        </div>
    },
})
