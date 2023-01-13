import compose from 'koa-compose'
import type { AxiosResponse, AxiosError } from 'axios'
import { loginCheckMid } from './loginCheckMid'
import { endAnimation } from './endAnimation'
import { dealWithErrorMid } from './dealWithErrorMid'
import axios from 'axios'
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
  $loadingBar?.error()
  if (!axios.isCancel(e)) {
    $message.error(e.message || 'network is so slow')
  }
  return Promise.reject(e)
}
export { responseResolve, responseReject }
