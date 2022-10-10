import { useRequest } from '@/utils/request'

export * from './decorator'

export class BaseService {
  prefix:string
  constructor (prefix:string) {
    this.prefix = prefix
  }

  setUrl (url:string) {
    return this.prefix + url
  }

  get (...arg:Parameters<typeof useRequest>) {
    arg[1] = { ...arg[1] ?? {}, method: 'get' }
    return useRequest(...arg)
  }

  post (...arg:Parameters<typeof useRequest>) {
    arg[1] = { ...arg[1] ?? {}, method: 'post' }
    return useRequest(...arg)
  }

  request (...arg:Parameters<typeof useRequest>) {
    return useRequest.call(this, ...arg)
  }
}
