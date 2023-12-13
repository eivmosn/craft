import type { DataTableBaseColumn } from 'naive-ui'
import { NDataTable, NInput } from 'naive-ui'
import type { Ref } from 'vue'
import { defineComponent, onMounted, ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

export function createBaseColumns(columns: DataTableBaseColumn[]): {
  columns: DataTableBaseColumn[]
  visibles: Ref<Record<string, boolean>>
} {
  const visibles = ref<Record<string, boolean>>({})
  return {
    columns: columns.map((column) => {
      const field = column.key
      return {
        ...column,
        cellProps(rowData, rowIndex) {
          return {
            onClick() {
              const id = `${field}-${rowIndex}`
              visibles.value = {}
              visibles.value[id] = true
            },
          }
        },
        render(rowData, rowIndex) {
          const id = `${field}-${rowIndex}`
          const value = rowData[field] as string
          return visibles.value[id] ? <NInput /> : value
        },
      }
    }),
    visibles,
  }
}

export default defineComponent({
  inheritAttrs: false,
  name: 'BaseTable',
  setup() {
    const { columns, visibles } = createBaseColumns([
      {
        title: 'Age',
        key: 'age',
      },
    ])

    const target = ref<InstanceType<typeof NDataTable>>()

    onClickOutside(target, () => visibles.value = {})

    const onHeaderClick = (table: HTMLElement) => {
      const head = table.querySelector('thead')
      head?.addEventListener('click', () => visibles.value = {})
    }

    onMounted(() => onHeaderClick(target.value?.$el))

    return {
      target,
      columns,
      visibles,
    }
  },
  render() {
    return (
      <NDataTable
        bordered
        rowKey={rowData => rowData.no}
        ref="target"
        maxHeight={400}
        size="small"
        virtualScroll
        data={Array.from({ length: 200 }).map((_, index) => ({
          no: index + 1,
          age: `London, Park Lane no. ${index}`,
        }))}
        columns={this.columns}
        singleLine={false}
      >

      </NDataTable>
    )
  },
})
