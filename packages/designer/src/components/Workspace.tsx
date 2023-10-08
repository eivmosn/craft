import { defineComponent, renderSlot } from "vue"

export default defineComponent({
    name: 'Workspace',
    setup() {

    },
    render() {
        return <div class='flex-1 min-w-318px'>
            {renderSlot(this.$slots, 'toolbar')}
            <div class='h-[calc(100%-48px)] p-5px'>
                <div class='h-full b-image-[var(--x-shining-v1),var(--x-shining-v2)] bg-[var(--x-background-light)]'>

                </div>
            </div>
        </div>
    },
})
