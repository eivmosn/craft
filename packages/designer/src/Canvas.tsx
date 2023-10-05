import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Canvas',
    inheritAttrs: false,
    setup() {

    },
    render() {
        return <div class='flex-1 p-6px b-left b-right b-[var(--x-border)] bg-[var(--x-canvas)] min-w-320px'>
            <div class='h-full p-4px b b-[var(--x-border)] bg-[var(--x-background)]'>

            </div>
        </div>
    },
})
