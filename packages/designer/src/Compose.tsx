import { defineComponent, provide } from "vue"
import Canvas from "./Canvas";
import Navbar from "./Navbar";
import DndPanel from "./DndPanel";
import SettingsPanel from "./SettingsPanel";
import { Preference } from '../../components'
import { useDesigner } from "./event";
import Schema from "./Schema";

export default defineComponent({
  setup() {
    const designer = useDesigner()
    provide('designer', designer)
  },
  render() {
    return <div class='h-full flex'>
      <Navbar />
      <Schema />
      {/* <DndPanel /> */}
      <Canvas />
      <SettingsPanel />
      <Preference />
    </div>
  },
})
