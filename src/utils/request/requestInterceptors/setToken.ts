import { getToken } from '@/utils'
import type { AxiosRequestConfig } from 'axios'
export function setToken (config: AxiosRequestConfig): AxiosRequestConfig {
  const token = getToken()
  console.log(config)
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}
