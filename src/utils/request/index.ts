import axios, { type AxiosRequestConfig } from 'axios'
import { responseResolve, responseReject } from './reponseInterceptors'
import { requestResolve } from './requestInterceptors'
import { useAxios, type UseAxiosOptions } from '@vueuse/integrations/useAxios'
const request = axios.create({
  timeout: 10000
})

request.interceptors.request.use(requestResolve, (e) => {
  return Promise.reject(e)
})
request.interceptors.response.use(responseResolve, responseReject)

interface ResponseData {
  code:number;
  data:any;
  message:string
}
function useRequest<T> (url:string, config?:AxiosRequestConfig, options?:UseAxiosOptions) {
  const result = useAxios(url, config ?? {}, request, options ?? { immediate: true })
  return { ...result, data: resolveRef<T>(() => result.data.value?.data), responseData: resolveRef<ResponseData>(() => result.data.value) }
}

export { request, useRequest }
