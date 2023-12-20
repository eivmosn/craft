import { NDataTable } from 'naive-ui'
import { defineComponent } from 'vue'
import type { DataTableColumns } from 'naive-ui'

const columns: DataTableColumns = [
  {
    title: '符号',
    key: 'no',
    align: 'center',
    resizable: true,
  },
  {
    title: '标题',
    key: 'title',
    align: 'center',
  },
  {
    title: '资产',
    key: 'bis',
    align: 'center',
  },
  {
    title: '摩的',
    key: 'mode',
    align: 'center',
  },
]

export const Table = defineComponent({
  inheritAttrs: false,
  name: 'Table',
  setup() {

  },
  render() {
    return (
      <div>
        <NDataTable
          bordered
          size="small"
          singleLine={false}
          columns={columns}
          data={[
            {
              no: '1',
              title: '1',
              bis: '1',
              mode: '1',
            },
            {
              no: '2',
              title: '2',
              bis: '2',
              mode: '2',
            },
            {
              no: '3',
              title: '3',
              bis: '3',
              mode: '3',
            },
          ]}
        />
      </div>
    )
  },
})
