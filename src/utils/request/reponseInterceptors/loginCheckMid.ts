import { createError } from '../error/messageTip'

import type { AxiosResponse } from 'axios'
export const loginCheckMid = async (
  response: AxiosResponse,
  next: () => void
) => {
  console.log('sdf')
  $loadingBar?.finish()
  const { code } = response.data
  if (code === 0) {
    return await next()
  }
  if (code === 401) {
    // logout?
  }
  return Promise.reject(createError(response))
}
