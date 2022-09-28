import { createError } from '../error/messageTip'

import type { AxiosResponse } from 'axios'
import { appStore, userStore } from '@/stores'
import router from '@/router'
export const loginCheckMid = async (
  response: AxiosResponse,
  next: () => void
) => {
  const { code } = response.data
  if (code === 401) {
    // 清空数据退出
    userStore.clearStore()
    router.replace('/login')
    return Promise.reject(response)
  }

  await next()
}
