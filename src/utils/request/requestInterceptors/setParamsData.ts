import type { AxiosRequestConfig } from 'axios'

export const setParamsData = (
  config: AxiosRequestConfig
): AxiosRequestConfig => {
  if (config.method?.toLowerCase() === 'get') {
    config.params = config.data
    config.data = undefined
  }
  return config
}
