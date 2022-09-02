import AutoImport from 'unplugin-auto-import/vite'

export default () => {
  return AutoImport({
    include: [
      /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      /\.vue$/, /\.vue\?vue/, // .vue
      /\.md$/ // .md
    ],
    imports: [
      'vue',
      'vue-router',
      '@vueuse/core'
      // 'vue-i18n',
      // 'vue/macros',
      // '@vueuse/head',
      // 'axios': [
      //   ['default', 'axios'], // import { default as axios } from 'axios',
      // ],
    ],
    dts: 'types/auto-import-api.d.ts',
    eslintrc: {
      enabled: true, // Default `false`
      filepath: './.eslintrc-auto-import-api.json',
      globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
    }
  })
}