import compose from 'koa-compose'
import type { AxiosResponse, AxiosError } from 'axios'
import { createError } from '../error/messageTip'
import { loginCheckMid } from './loginCheckMid'
import { endAnimation } from './endAnimation'
import { dealWithErrorMid } from './dealWithErrorMid'
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
  return Promise.reject(createError(e))
}
export { responseResolve, responseReject }

// function koaCompose(middleware) {
//   return function (context, next) {
//     let index = -1
//     return dispatch(0)
//     function dispatch(i) {
//       if (i <= index)
//         return Promise.reject(new Error('next() called multiple times'))
//       index = i
//       let fn = middleware[i]
//       if (i === middleware.length) fn = next
//       if (!fn) return Promise.resolve()
//       try {
//         return Promise.resolve(fn(context, dispatch.bind(null, i + 1)))
//       } catch (err) {
//         return Promise.reject(err)
//       }
//     }
//   }
// }
