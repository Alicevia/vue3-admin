import type { ProjectEnv } from './../../types/configuration.d'
import type { ProxyOptions, ServerOptions } from 'vite'

export const createViteServer = (projectSettings:ProjectEnv):ServerOptions => {
  const { VITE_USE_PROXY } = projectSettings
  for (const [prefix, target] of VITE_USE_PROXY!) {
    console.log([prefix, target])
  }
  return {
    host: '0.0.0.0',
    open: false
  }
}
