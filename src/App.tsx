import RenderForm from './components/view/RenderForm'

export default defineComponent({
  inheritAttrs: false,
  name: 'App',
  setup() {

  },
  render() {
    return (
      <div class="p-10">
        <RenderForm
          option={{
            data: {
              ipt: '1',
            },
            items: [
              {
                id: '',
                field: 'ipt',
                component: 'Input',
                label: '字段1',
                visible: true,
                props: {
                  placeholder: '请输入',
                  defaultValue: '1',
                  options: [],
                  style: {

                  },
                  disabled: false,
                  required: false,
                  readonly: false,
                },
                events: {

                },
              },
            ],
            config: {
              gapX: 8,
              gapY: 8,
              suffix: ':',
              labelWidth: 80,
              labelAlign: 'right',
              labelPlacement: 'left',
            },
          }}
        />
      </div>
    )
  },
})
