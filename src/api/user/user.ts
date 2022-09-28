import type { LoginParams, LoginData, UserInfoData, ValidateTokenData } from './user.d'
import { BaseService } from '@/utils/service'

class UserService extends BaseService {
  login (data?:LoginParams) {
    return this.get<LoginData>(this.setUrl('/login.json'), { data })
  }

  logout () {
    return this.get<boolean>(this.setUrl('/logout.json'))
  }

  getUserInfo () {
    return this.get<UserInfoData>(this.setUrl('/userInfo.json'))
  }

  validateToken () {
    return this.get<ValidateTokenData>(this.setUrl('/validateToken.json'))
  }
}
const userService = new UserService('')
export { userService }
