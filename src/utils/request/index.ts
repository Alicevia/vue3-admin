import axios, { type AxiosRequestConfig } from 'axios'
import { responseResolve, responseReject } from './reponseInterceptors'
import { requestResolve } from './requestInterceptors'
import { useAxios, type UseAxiosOptions } from '@vueuse/integrations/useAxios'
const request = axios.create({
  timeout: 10000,
})
request.interceptors.request.use(requestResolve, (e) => {
  return Promise.reject(e)
})

request.interceptors.response.use(responseResolve, responseReject)

interface ResponseData<T> {
  code: number;
  data: T;
  message: string
}
function useRequest<T> (url: string, config?: AxiosRequestConfig, options?: UseAxiosOptions) {
  const result = useAxios<ResponseData<T>>(url, config ?? {}, request, options ?? { immediate: false })
  const data = ref<T>()
  syncRefs(() => result.data.value?.data, data)
  return { ...result, data, responseData: resolveRef<ResponseData<T>>(result.data) }
}

export { request, useRequest }
