import {
  NFormItem,
  NInput,
} from 'naive-ui'
import {
  getAttrs,
} from 'src/shared/utils'

export default defineComponent({
  inheritAttrs: false,
  name: 'Widget',
  setup(_, { attrs }) {
    const { props, events } = getAttrs(attrs)
    console.log(events)
    return {
      props,
    }
  },
  render() {
    return (
      <div
        style={{
          width: '100%',
          gridColumn: 'span 12 / span 12',
        }}
      >
        <NFormItem label="测试:">
          <NInput />
        </NFormItem>
      </div>
    )
  },
})
