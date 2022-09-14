import type { ImportMetaEnv } from '../../types/configuration'

export const analyseEnv = (VITE_ENV:ImportMetaEnv):ImportMetaEnv => {
  const settings:Partial<ImportMetaEnv> = {}
  for (const key in VITE_ENV) {
    if (key.includes('USE')) {
      settings[key] = JSON.parse(VITE_ENV[key])
    } else {
      settings[key] = VITE_ENV[key]
    }
  }
  return settings
}
