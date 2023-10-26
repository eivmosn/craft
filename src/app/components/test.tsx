import { defineComponent } from 'vue'

import { NButton } from 'naive-ui'
import { useState } from './state'

export const C2 = defineComponent({
  setup() {
    const { setState, state } = useState()
    const onClick = () => {
      setState('name.hello', 1)
    }
    return {
      state,
      onClick,
    }
  },
  render() {
    return (<>
      <NButton onClick={this.onClick}>改变全局状态</NButton>
      {JSON.stringify(this.state)}
    </>)
  },
})

export const C1 = defineComponent({
  setup() {
    const { state } = useState()
    return {
      state,
    }
  },
  render() {
    return (<div>
      {JSON.stringify(this.state)}
      <C2 />
    </div>)
  },
})
