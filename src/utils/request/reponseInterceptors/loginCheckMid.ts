
import type { AxiosResponse } from 'axios'
import { useUserStore } from '@/stores'
import router from '@/router'
import { requestCache } from '@/utils'
export const loginCheckMid = async (
  response: AxiosResponse,
  next: () => void
) => {
  const { code } = response.data
  const userStore = useUserStore()

  if (code === 401) {
    // 清空数据退出
    userStore.clearStore()
    router.replace('/login')
    requestCache.clearCache()
    return Promise.reject(response)
  }
  console.log('lsf', response.config)
  requestCache.remove(requestCache.createKey(response.config))
  await next()
}
