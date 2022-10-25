import type { AxiosRequestConfig } from 'axios'

export const setParamsData = (
  config: AxiosRequestConfig
): AxiosRequestConfig => {
  if (config.method?.toLowerCase() === 'get') {
    if (config.data) {
      config.params = config.data
      config.data = undefined
    }
  }
  return config
}
