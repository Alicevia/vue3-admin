import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Pages from 'vite-plugin-pages'
import autoImportApi from './autoImportApi'
import autoImportComponents from './autoImportComponents'
import Layouts from 'vite-plugin-vue-layouts'
import VueSetUpExtend from 'vite-plugin-vue-setup-extend'
import Inspector from 'vite-plugin-vue-inspector'
const plugins = [
  vue(),
  vueJsx(),
  Inspector({
    enabled: true
  }),
  VueSetUpExtend(),
  Pages({
    dirs: 'src/views',
    exclude: ['**/components/*.vue']
  }),
  Layouts({
    layoutsDirs: 'src/layouts'
  }),
  autoImportApi(),
  autoImportComponents()
]
export { plugins }
