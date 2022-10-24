import { requestCache } from '@/utils'
import type { AxiosRequestConfig } from 'axios'
export const setCancelRequest = (
  config: AxiosRequestConfig
): AxiosRequestConfig => {
  const controller = new AbortController()

  config.signal = controller.signal
  console.log('setCancelRequest', config)
  requestCache.add(requestCache.createKey(config), controller.abort)
  return config
}
