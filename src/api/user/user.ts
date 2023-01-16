import type { LoginParams, LoginData, UserInfoData, ValidateTokenData } from './user.d'
import { BaseService } from '@/utils'
class UserService extends BaseService {
  login (data:LoginParams) {
    return this._get<LoginData>('/login.json', { data })
  }

  logout () {
    return this._get<boolean>('/logout.json')
  }

  getUserInfo () {
    return this._get<UserInfoData>('/userInfo.json')
  }

  validateToken () {
    return this._get<ValidateTokenData>('/validateToken.json')
  }
  
  getInfo1 (){
    return this._get<UserInfoData>('/userInfo.json')
  }
  getInfo2 (){
    return this._get<UserInfoData>('/userInfo.json')
  }
}
const userService = new UserService()
setTimeout(() => {
  userService.getInfo1()
}, 2000)
export { userService }
