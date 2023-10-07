import { defineComponent } from 'vue'
import TitlePanel from "./container/TitlePanel";
import { CodeEditor } from "../../components";

export default defineComponent({
    name: 'Schema',
    setup() {

    },
    render() {
        return <TitlePanel title='JSON Schema' class='b-left b-[var(--x-border)] min-w-320px'>
            <CodeEditor />
        </TitlePanel>
    },
})
