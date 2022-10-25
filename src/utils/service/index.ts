import { request, useRequest } from '@/utils'
import type { AxiosRequestConfig, CancelTokenSource, Method } from 'axios'
import qs from 'qs'
export class BaseService {
  prefix:string
  constructor (prefix = '') {
    this.prefix = prefix
  }

  createAxiosMethod (method:Method) {
    return <T> (...arg:Parameters<typeof useRequest>) => {
      arg[0] = this.prefix + arg[0]
      arg[1] = { ...arg[1] ?? {}, method }
      return useRequest<T>(...arg)
    }
  }

  _createAxiosMethod (method:'get'|'post'|'delete') {
    return <T> (...arg:Parameters<typeof request>) => {
      arg[0] = this.prefix + arg[0]
      return request[method]<T>(...arg)
    }
  }

  get = this.createAxiosMethod('get')
  post = this.createAxiosMethod('post')
  delete = this.createAxiosMethod('delete')
  patch = this.createAxiosMethod('patch')
  useRequest = useRequest
  request = request
  _get = request.get
  _post = request.post
  _delete = request.delete
}
class RequestCache {
  private cache = new Map()
  msg = '取消重复请求'
  clearCache (key?:string) :void {
    if (key) {
      this.remove(key)
    } else {
      this.cache.forEach(item => {
        item(this.msg)
      })
      this.cache = new Map()
    }
  }

  createKey (config:AxiosRequestConfig) {
    const params = config.params ? qs.stringify(config.params) : ''
    const data = config.data ? qs.stringify(config.data) : ''
    const key = config.method + config.url + params + data
    return key
  }

  triggerCacheFn (key:string) {
    if (this.cache.has(key)) {
      this.cache.get(key)(this.msg)
    }
  }

  add (key:string, f:CancelTokenSource['cancel']) {
    this.triggerCacheFn(key)
    this.remove(key)
    this.cache.set(key, f)
  }

  isExist (key:string) {
    return this.cache.has(key)
  }

  remove (key:string) {
    if (this.cache.has(key)) {
      this.cache.delete(key)
    }
  }
}

export const requestCache = new RequestCache()
