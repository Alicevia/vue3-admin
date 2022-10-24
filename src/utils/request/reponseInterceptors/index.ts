import compose from 'koa-compose'
import type { AxiosResponse, AxiosError } from 'axios'
import { createError } from '../error/messageTip'
import { loginCheckMid } from './loginCheckMid'
import { endAnimation } from './endAnimation'
import { dealWithErrorMid } from './dealWithErrorMid'
import { requestCache } from '@/utils'
const responseMiddleWares = compose<AxiosResponse>([endAnimation, loginCheckMid, dealWithErrorMid])
const responseResolve = async (response:AxiosResponse) => {
  try {
    await responseMiddleWares(response)
    return response
  } catch (error) {
    return Promise.reject(response)
  }
}
const responseReject = (e: AxiosError) => {
  $message.error(e.message || 'network is so slow')
  $loadingBar?.error()
  console.dir(e)
  // requestCache.remove(requestCache.createKey(e.config))
  return Promise.reject(e)
}
export { responseResolve, responseReject }
