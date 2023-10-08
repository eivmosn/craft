import { defineComponent } from "vue"
import Collapse from "../containers/Collapse";

export default defineComponent({
    name: 'DndPanel',
    setup() {

    },
    render() {
        return <div class='b-right b-[var(--x-border)] bg-[var(--x-background)] min-w-199px w-300px'>
            <div class='text-18px text-[var(--x-color)] fs px-12px b-bottom b-[var(--x-border)] bg-[var(--x-background-light)] min-h-48px'>
                Components
            </div>
        </div>
    },
})
