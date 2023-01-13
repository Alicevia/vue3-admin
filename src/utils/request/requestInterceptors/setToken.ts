import { getToken } from '@/utils'
import type { AxiosRequestConfig } from 'axios'
export function setToken (config: AxiosRequestConfig): AxiosRequestConfig {
  const token = getToken()
  if (token) {
    config.headers
      ? (config.headers.Authorization = `Bearer ${token}`)
      : (config.headers = { Authorization: `Bearer ${token}` })
  }
  return config
}
