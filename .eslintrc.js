module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true
  },
  extends: [
    'standard',
    'eslint:recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    'max-len': ['error', { code: 60 }],
    'no-unused-vars': 'off',
    'no-throw-literal': 'error',
    'no-invalid-this': 'error',
    'prefer-promise-reject-errors': 'error'
  }
}
