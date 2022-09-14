import type { ImportMetaEnv } from './../../../types/configuration.d'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Pages from 'vite-plugin-pages'
import autoImportApi from './autoImportApi'
import autoImportComponents from './autoImportComponents'
import Layouts from 'vite-plugin-vue-layouts'
import VueSetUpExtend from 'vite-plugin-vue-setup-extend'
import Inspector from 'vite-plugin-vue-inspector'

export const registerPlugins = (projectSettings:ImportMetaEnv, isBuild:boolean) => {
  const { VITE_USE_LEGACY } = projectSettings
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
    VueSetUpExtend(),
    autoImportApi(),
    autoImportComponents()
  ]
  if (!isBuild) {
    plugins.push(Inspector({
      enabled: true
    }))
  }
  return plugins
}
