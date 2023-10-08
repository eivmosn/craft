import { defineComponent } from "vue"
import Navbar from "./Navbar";
import Toolbar from "./Toolbar";
import DndPanel from "./DndPanel";
import { toggle } from "../event";
import Workspace from "./Workspace";
import SettingsPanel from "./SettingsPanel";
import ConfigProvider from "./ConfigProvider";

export default defineComponent({
    name: 'Assemble',
    inheritAttrs: false,
    setup() {
        toggle()
    },
    render() {
        return <ConfigProvider class='flex'>
            <Navbar />
            <DndPanel />
            <Workspace>
                {{
                    toolbar: () => <Toolbar />
                }}
            </Workspace>
            <SettingsPanel />
        </ConfigProvider>
    },
})
