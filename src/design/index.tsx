import Navigation from './Navigation'
import ResizePanel from './ResizePanel'
import Component from './Component'

export default defineComponent({
  inheritAttrs: false,
  render() {
    return (
      <ResizePanel>
        {{
          navigation: () => <Navigation />,
          component: () => <Component />,
        }}
      </ResizePanel>
    )
  },
})
