import type { AxiosRequestConfig } from 'axios'
import { useUserStore } from '@/stores'
export function setToken (config: AxiosRequestConfig): AxiosRequestConfig {
  const userStore = useUserStore()
  const token = userStore.getToken()
  if (token) {
    config.headers
      ? (config.headers.Authorization = `Bearer ${token}`)
      : (config.headers = { Authorization: `Bearer ${token}` })
  }

  return config
}
