import type { ConfigEnv, UserConfig } from 'vite'
import { loadEnv } from 'vite'
import { analyseEnv } from './build/utils'
import { registerPlugins, createViteResolve, createViteBuild, createViteServer } from './build/vite'
// https://vitejs.dev/config/
export default ({ command, mode }:ConfigEnv):UserConfig => {
  console.log(command, mode)
  const isBuild = command === 'build'
  const projectSettings = analyseEnv(loadEnv(mode, process.cwd()))
  const { VITE_BASE } = projectSettings

  return {
    base: VITE_BASE ?? '/',
    plugins: registerPlugins(projectSettings, isBuild),
    resolve: createViteResolve(),
    build: createViteBuild(),
    server: createViteServer(projectSettings)
  }
}
