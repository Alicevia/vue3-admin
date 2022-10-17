import type { ImportMetaEnv } from './../../../types/configuration.d'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import autoImportApi from './autoImportApi'
import autoImportComponents from './autoImportComponents'
import Layouts from 'vite-plugin-vue-layouts'
import VueSetUpExtend from 'vite-plugin-vue-setup-extend'
import Inspector from 'vite-plugin-vue-inspector'
import legacy from '@vitejs/plugin-legacy'
import FileRoute from './fileRoute'
import Unocss from './unocss'

export const registerPlugins = (projectSettings:ImportMetaEnv, isBuild:boolean) => {
  const { VITE_USE_LEGACY } = projectSettings
  const plugins = [
    vue(),
    vueJsx(),
    Unocss(),
    FileRoute(),
    Layouts({
      layoutsDirs: 'src/layouts'
    }),
    VueSetUpExtend(),
    autoImportApi(),
    autoImportComponents()
  ]
  if (!isBuild) {
    plugins.push(Inspector({
      enabled: false
    }))
  }

  VITE_USE_LEGACY && plugins.push(legacy({
    // 设置目标浏览器，browserslist 配置语法
    targets: '>0.5%',
    modernPolyfills: true
  }))
  return plugins
}
