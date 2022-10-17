import type { LoginParams, LoginData, UserInfoData, ValidateTokenData } from './user.d'
import { BaseService } from '@/utils/service'

class UserService extends BaseService {
  login (data:LoginParams) {
    return this.get<LoginData>('/login.json', { data })
  }

  logout () {
    return this.get<boolean>('/logout.json')
  }

  getUserInfo () {
    return this.get<UserInfoData>('/userInfo.json')
  }

  validateToken () {
    return this.get<ValidateTokenData>('/validateToken.json')
  }
}
const userService = new UserService()

export { userService }
