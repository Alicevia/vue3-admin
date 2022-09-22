import { createError } from '../error/messageTip'

import type { AxiosResponse } from 'axios'
import { appStore } from '@/stores'
export const loginCheckMid = async (
  response: AxiosResponse,
  next: () => void
) => {
  const { code } = response.data
  if (code === 401) {
    // 清空数据退出
    return Promise.reject(response)
  }

  await next()
}
