import { useRequest } from '@/utils/request'
export const urlPrefixDecoratorFactor = (prefix:string) => {
  return (target:Function) => {
    console.log(target)
  }
}
export class BaseService {
  prefix:string
  constructor (prefix:string) {
    this.prefix = prefix
  }

  setUrl (url:string) {
    return this.prefix + url
  }

  get = useRequest
  post (...arg:Parameters<typeof useRequest>) {
    arg[1] = { ...arg[1] ?? {}, method: 'post' }
    return useRequest(...arg)
  }
}
