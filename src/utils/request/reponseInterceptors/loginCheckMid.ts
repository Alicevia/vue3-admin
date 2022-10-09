
import type { AxiosResponse } from 'axios'
import { useUserStore } from '@/stores'
import router from '@/router'
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
    return Promise.reject(response)
  }

  await next()
}
