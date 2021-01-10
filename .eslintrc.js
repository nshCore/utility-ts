module.exports = {
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'project': 'tsconfig.json',
    'sourceType': 'module',
  },
  extends: [
    '@nshcore-npm/eslint-config-nshcore'
  ],
  'rules': {},
  'settings': {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      'typescript': {
        'project': [
          './tsconfig.json',
        ]
      },
    },
  }
};
