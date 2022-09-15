import type { ImportMetaEnv, ProjectEnv } from '../../types/configuration'

export const analyseEnv = (VITE_ENV:ImportMetaEnv):ProjectEnv => {
  const settings:ProjectEnv = {}
  for (const key in VITE_ENV) {
    if (key.includes('USE')) {
      settings[key] = JSON.parse(VITE_ENV[key])
    } else {
      settings[key] = VITE_ENV[key]
    }
  }
  return settings
}
