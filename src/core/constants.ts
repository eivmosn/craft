export const enum ClassNames {
  SCROLLBAR = '.n-scrollbar-rail',
}

export const enum Components {
  INPUT = 'input',
  TEXTAREA = 'textarea',
  SELECT = 'select',
  INPUT_NUMBER = 'numeric',
  PASSWORD = 'password',
  DATE = 'date',
  DATE_TIME = 'datetime',
  TIME = 'time',
  RADIO = 'radio',
  CHECKBOX = 'checkbox',
  ICON = 'icon',
  FILE = 'file',
  IMAGE = 'image',
  TAB = 'tab',
  GRID = 'grid',
  GROUP = 'group',
  COLLAPSE = 'collapse',
  TREE_SELECT = 'treeSelect',
  MULTIPLE_SELECT = 'multipleSelect',
}

export const THEME_COLOR = '#0079fe'

export function makeMap(
  str: string,
  expectsLowerCase?: boolean,
): (key: string) => boolean {
  const map: Record<string, boolean> = Object.create(null)
  const list: Array<string> = str.split(',')
  for (let i = 0; i < list.length; i++)
    map[list[i]] = true
  return expectsLowerCase ? val => !!map[val.toLowerCase()] : val => !!map[val]
}

export const includeContainer = makeMap(`${Components.TAB},${Components.GRID},
${Components.GROUP},${Components.COLLAPSE}`)

export const includeSelect = makeMap(`${Components.SELECT},${Components.TREE_SELECT},
${Components.MULTIPLE_SELECT}`)
