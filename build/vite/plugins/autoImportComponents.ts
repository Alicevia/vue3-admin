import Components from 'unplugin-vue-components/vite'

export default () => {
  return Components({
    dirs: ['src/**/components'],
    dts: 'types/auto-import-components.d.ts',
    extensions: ['vue'],
    // resolvers: [NaiveUiResolver()],
    include: [/\.vue$/, /\.vue\?vue/]
  })
}