import type { AxiosResponse } from 'axios'
import type { ResponseData } from '../request'

export const dealWithErrorMid = async (response: AxiosResponse<ResponseData>, next) => {
  const { code } = response.data
  if (code !== 0) { // 非401 非0
    return Promise.reject(response)
  }
  return await next()
}
