import {
  NForm,
  NFormItemGi,
  NGrid,
  NInput,
} from 'naive-ui'
import {
  makeMap,
} from '@vue/shared'
import Hello from './components/Hello'

export default defineComponent({
  inheritAttrs: false,
  name: 'App',
  setup() {
    const item = {
      key: '',
      field: 'field',
      component: 'Input',
      label: '字段1',
      props: {
        placeholder: '请输入',
        defaultValue: '1',
      },
    }

    const containers = 'group,grid'

    const isContainers = /* #__PURE__ */ makeMap(containers)

    console.log(isContainers('group2'))

    return {
      item,
    }
  },
  render() {
    return (
      <div class="p-10">
        <Hello {...this.item}>

        </Hello>
        <NForm
          showFeedback={false}
          labelPlacement="left"
          requireMarkPlacement="left"
        >
          <NGrid xGap={8} yGap={8}>
            <NFormItemGi
              label="测试:"
              required
              labelStyle={{
                color: 'indigo',
              }}
              span={12}
            >
              <NInput />
            </NFormItemGi>
            <NFormItemGi
              label="测试:"
              required
              labelStyle={{
                color: 'indigo',
              }}
              span={12}
            >
              <NInput />
            </NFormItemGi>
            <NFormItemGi
              label="测试:"
              required
              labelStyle={{
                color: 'indigo',
              }}
              span={12}
            >
              <NInput />
            </NFormItemGi>
          </NGrid>
        </NForm>
      </div>
    )
  },
})
