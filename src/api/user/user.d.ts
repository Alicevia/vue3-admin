import { myUseAxios } from '@/utils/request'
import type { AxiosRequestConfig } from 'axios'
import type { UserInfoParams } from './user'

export const getUserInfo = <T>(v:T, data?:UserInfoParams) => {
  return myUseAxios(v, { url: '/userInfo', data })
}
export const getTest = (config?:AxiosRequestConfig<UserInfoParams>) => {
  return myUseAxios({ name: undefined, age: undefined }, { url: '/test.json', method: 'get', ...config })
}
