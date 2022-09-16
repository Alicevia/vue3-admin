import { myUseAxios } from '@/utils/request'
import type { UserInfoParams } from './user'

export const getUserInfo = <T>(v:T, data:UserInfoParams) => {
  return myUseAxios(v, { url: '/userInfo', data })
}
