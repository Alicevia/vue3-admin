import type { AxiosRequestConfig } from 'axios'
import { userStore } from '@/stores'
export function setToken (config: AxiosRequestConfig): AxiosRequestConfig {
  const token = ref('')
  if (token) {
    config.headers
      ? (config.headers.Authorization = `Bearer ${token}`)
      : (config.headers = { Authorization: `Bearer ${token}` })
  }

  return config
}
