import { defineComponent, provide } from "vue"
import Canvas from "./Canvas";
import Toolbar from "./Toolbar";
import DndPanel from "./DndPanel";
import SettingsPanel from "./SettingsPanel";
import { Preference } from '../../components'
import { useDesigner } from "./event";

export default defineComponent({
  setup() {
    const designer = useDesigner()
    provide('designer', designer)
  },
  render() {
    return <div class='h-full flex'>
      <Toolbar />
      <DndPanel />
      <Canvas />
      <SettingsPanel />
      <Preference />
    </div>
  },
})
