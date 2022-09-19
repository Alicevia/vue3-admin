import { myUseAxios } from '@/utils/request'
import type { UserInfoParams } from './user'

export const getUserInfo = <T>(v:T, data?:UserInfoParams) => {
  return myUseAxios(v, { url: '/userInfo', data })
}
export const getTest = <T>(v:T, data?) => {
  return myUseAxios(v, { url: '/public/test.json', method: 'GET', data })
}
