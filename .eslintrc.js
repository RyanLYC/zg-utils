module.exports = {
  'root': true,
  'env': {
    'node': true,
    'browser': true
  },
  'globals': {
    'window': true,
    'process': true
  },
  'parser': '@typescript-eslint/parser',
  'plugins': ['@typescript-eslint'],
  'extends': [
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended'
  ],
  'rules': {
    'no-tabs': 'off',
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'comma-dangle': 'error',
    'semi': ['error', 'never'],
    'comma-spacing': 'error',
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    'arrow-spacing': 'error',
    'block-spacing': ['error', 'always'],
    'object-curly-spacing': ['error', 'always'],
    'switch-colon-spacing': 'error',
    'space-before-blocks': 'error',
    'space-before-function-paren': 'error',
    'spaced-comment': 'error',
    'no-trailing-spaces': 'error',
    'no-undef': 'off',
    'space-infix-ops': ['error', { 'int32Hint': false }],
    'no-useless-escape': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-this-alias': 'off'
  }
}
