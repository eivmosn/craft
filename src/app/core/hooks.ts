import Fuse from 'fuse.js'
import { reactive } from 'vue'
import { materials } from '../fc.config'

export interface FuseSearch {
  result: Record<string, any>
  search: Record<string, Fuse<{
    label: string
    type: string
  }>>
}

export function useComponentSearch() {
  const fuse: FuseSearch = reactive({
    result: {},
    search: {},
  })

  materials.forEach(({ children, label }) => {
    fuse.search[label] = new Fuse(children, {
      keys: ['label', 'type'],
      threshold: 0.6,
    })
  })

  const onSearch = (input: string) => {
    for (const name in fuse.search) {
      fuse.result[name] = fuse.search[name]
        .search(input).map(data => data.item)
    }
  }

  const getChildren = (name: string, children: []) => {
    if (Array.isArray(fuse.result[name]) && fuse.result[name].length)
      return fuse.result[name]
    return children
  }

  return {
    getChildren,
    onSearch,
  }
}
