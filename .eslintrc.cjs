module.exports = {
  root: true,
  extends: ['eslint:recommended', 'prettier', 'plugin:vitest-globals/recommended'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020
  },
  env: {
    browser: true,
    es2017: true,
    node: true,
    'vitest-globals/env': true
  }
}
