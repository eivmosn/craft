import { defineComponent } from 'vue'
import FcNav from './components/FcNav'
import FcTools from './components/FcTools'
import FcMonitor from './components/FcMonitor'
import FcProvider from './components/FcProvider'
import FcSettings from './components/FcSettings'
import FcMaterials from './components/FcMaterials'

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
