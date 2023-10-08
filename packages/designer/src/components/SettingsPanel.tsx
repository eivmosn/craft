import { defineComponent } from "vue"

export default defineComponent({
    name: 'SettingsPanel',
    setup() {

    },
    render() {
        return <div class='b-left b-[var(--x-border)] bg-[var(--x-background)] min-w-199px w-300px'>
            <div class='text-18px text-[var(--x-color)] fs px-12px b-bottom b-[var(--x-border)] bg-[var(--x-background-light)] min-h-48px'>
                Property Settings
            </div>
        </div>
    },
})
