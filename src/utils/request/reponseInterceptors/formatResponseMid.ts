import type { AxiosResponse } from 'axios'

export const formatResponseMid = async (response: AxiosResponse, next) => {
  return await next(response)
}
