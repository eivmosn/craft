import { defineComponent, ref } from "vue"

export default defineComponent({
    name: 'CodeEditor',
    setup() {
        const editorRef = ref()
        return {
            editorRef
        }
    },
    render() {
        return <div ref='editorRef' class='h-430px b'></div>
    },
})
