import { useRequest } from '../request'
import 'reflect-metadata'

export function GET (url?:string) {
  return (target, propertyKey, descriptor) => {
    const origin = descriptor.value

    descriptor.value = function (...args) {
      origin.call(target, ...args)
    }
  }
}

export function Controller (prefix = '') {
  return function (constructor) {
    Reflect.defineMetadata('prefix', prefix, constructor.prototype)
    return constructor
  }
}
