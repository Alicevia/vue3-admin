import { request, useRequest } from '@/utils'
import type { Method } from 'axios'

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
