import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Pages from 'vite-plugin-pages'
import autoImportApi from './autoImportApi'
import autoImportComponents from './autoImportComponents'
import Layouts from 'vite-plugin-vue-layouts'
const plugins = [
  vue(),
  vueJsx(),
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
export default plugins
