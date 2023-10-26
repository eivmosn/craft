import type { IFuseOptions } from 'fuse.js'
import Fuse from 'fuse.js'
import { reactive, ref } from 'vue'
import type { MaybeObject } from '@eivmosn/utils'
import config from '../dev.config'

export const fuseConfig: IFuseOptions<{
  type: string
  label: string
}> = {
  keys: ['type', 'label'],
  includeScore: false,
  isCaseSensitive: false,
  threshold: 0,
}

export function useSearch() {
  const text = ref<string>('')
  const result = reactive<MaybeObject>({})
  const containers = new Fuse(config.containers.components, fuseConfig)
  const widgets = new Fuse(config.widgets.components, fuseConfig)

  const onSearch = (word: string) => {
    text.value = word
    result.containers = containers.search(word).map(r => r.item)
    result.widgets = widgets.search(word).map(r => r.item)
  }

  const getComponents = (name: string) => {
    if (result[name] && result[name].length)
      return result[name]
    return config[name].components
  }

  return {
    text,
    onSearch,
    getComponents,
  }
}
