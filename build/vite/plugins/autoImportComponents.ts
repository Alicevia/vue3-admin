import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
export default () => {
  return Components({
    dirs: ['src/**/components'],
    dts: 'types/auto-import-components.d.ts',
    extensions: ['vue'],
    resolvers: [NaiveUiResolver()],
    include: [/\.vue$/, /\.vue\?vue/]
  })
}
