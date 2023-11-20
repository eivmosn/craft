import {
  NForm,
} from 'naive-ui'
import Grid from './components/Grid'
import Widget from './components/Widget'

const components = [
  {
    id: '',
    field: 'field',
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
  {
    id: '',
    field: 'field',
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
]

export default defineComponent({
  inheritAttrs: false,
  name: 'App',
  setup() {

  },
  render() {
    return (
      <div class="p-10">
        <NForm
          showFeedback={false}
          labelPlacement="left"
          requireMarkPlacement="left"
        >
          <Grid>
            {
              components.map(component => <Widget {...component} />)
            }
          </Grid>
        </NForm>
      </div>
    )
  },
})
