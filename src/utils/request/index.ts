import { createError } from './error/messageTip'
import axios, { type AxiosRequestConfig } from 'axios'
import { responseResolve, responseReject } from './reponseInterceptors'
import { requestResolve } from './requestInterceptors'
import { useAxios, type UseAxiosOptions } from '@vueuse/integrations'
const request = axios.create({
  timeout: 10000
})

request.interceptors.request.use(requestResolve, (e) => {
  return Promise.reject(e)
})
request.interceptors.response.use(async (response) => {
  return await responseResolve(response)
    .then(() => response)
    .catch(() => Promise.reject(createError(response)))
}, responseReject)

type RequestConfig = Omit<AxiosRequestConfig, 'url'>&{url:string}

function myUseAxios<T> (defaultValue:T, config:RequestConfig, options?:UseAxiosOptions) {
  const result = useAxios(config.url, config, request, options)
  return { ...result, data: refDefault<T>(result.data, defaultValue) }
}

export { request, myUseAxios }
