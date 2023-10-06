import { NScrollbar } from 'naive-ui'
import { defineComponent, renderSlot } from 'vue'

export default defineComponent({
    name: 'TitlePanel',
    props: {
        title: String
    },
    setup() {

    },
    render() {
        return <div class={['w-300px bg-[var(--x-background)]']}>
            <div class='h-48px text-[var(--x-navicon)] text-18px fs px-12px b-bottom b-[var(--x-border)] bg-[var(--x-background)]'>
                {this.title}
            </div>
            <div class='h-[calc(100%-48px)]'>
                <NScrollbar class='fit-edge'>
                    {renderSlot(this.$slots, 'default')}
                </NScrollbar>
            </div>
        </div>
    },
})
