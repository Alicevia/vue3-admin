module.exports = {
  root: true,
  extends: ['@alicevia/vue','./.eslintrc-auto-import-api.json'],
  rules: {
    'no-multi-spaces': 'error',
    'key-spacing': ['error', { mode: 'strict' }],
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['index'], //需要忽略的组件名
      },
    ],
  },
}
