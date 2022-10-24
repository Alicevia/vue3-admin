import type { AxiosResponse } from 'axios'

export const endAnimation = async (response: AxiosResponse, next: any) => {
  return await next()
}
