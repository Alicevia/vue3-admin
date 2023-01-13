module.exports = {
  root: true,
  extends: ['@alicevia/vue','./.eslintrc-auto-import-api.json'],
  rules: {
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['index'], //需要忽略的组件名
      },
    ],
  },
}
