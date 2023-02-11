module.exports = {
  plugins: ['@typescript-eslint/eslint-plugin', 'import', 'unused-imports'],
  extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
  root: true,
  env: {
    es2021: true,
    node: true,
    jest: true
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',

    'prefer-template': 'error',
    'newline-before-return': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }
    ],
    'unused-imports/no-unused-imports': 'error',
    '@typescript-eslint/member-ordering': [
      'error',
      { default: ['signature', 'field', 'constructor', 'get', 'set', 'method'] }
    ],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'parent',
          'sibling',
          'index',
          'object',
          'type'
        ],
        alphabetize: {
          order: 'asc'
        }
      }
    ]
  }
}
