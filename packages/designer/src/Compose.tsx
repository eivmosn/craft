import { defineComponent } from "vue"
import Canvas from "./Canvas";
import Toolbar from "./Toolbar";
import DndPanel from "./DndPanel";
import SettingsPanel from "./SettingsPanel";
import { Preference } from '../../components'

export default defineComponent({
  setup() {

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
