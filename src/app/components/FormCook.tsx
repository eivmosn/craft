import { defineComponent } from 'vue'
import FcNav from './FcNav'
import FcTools from './FcTools'
import FcMonitor from './FcMonitor'
import FcProvider from './FcProvider'
import FcSettings from './FcSettings'
import FcMaterials from './FcMaterials'

export default defineComponent({
  inheritAttrs: false,
  render() {
    return (<FcProvider>
      <FcNav />
      <FcMaterials />
      <div class="min-w-300px flex-1">
        <FcTools />
        <FcMonitor />
      </div>
      <FcSettings />
    </FcProvider>)
  },
})
