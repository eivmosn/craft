import antfu from '@antfu/eslint-config'
import unocss from '@unocss/eslint-plugin'

export default antfu(
  {
    rules: {
      'no-console': 'off',
      'no-restricted-syntax': [
        'error',
        {
          selector: 'TSEnumDeclaration:not([const=true])',
          message: 'Use const enums instead',
        },
      ],
      'curly': 'off',
      'object-curly-newline': [
        'error',
        {
          ImportDeclaration: 'always',
        },
      ],
    },
    gitignore: true,
  },
  unocss.configs.flat,
)
