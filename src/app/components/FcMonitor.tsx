import { defineComponent } from 'vue'
import { Scrollview } from './FcView'
import { C1 as Other, C2 as Test } from './test'

export default defineComponent({
  inheritAttrs: false,
  name: 'FcMonitor',
  setup() {

  },
  render() {
    return (<div class="h-[calc(100%-48px)] bg-[var(--fc-background-deep)] p-4px">
      <Scrollview class="b bg-[var(--fc-background-light)]">
        <Test />
        <Other />
      </Scrollview>
    </div>)
  },
})
