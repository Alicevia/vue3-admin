import type { LoginParams, LoginData, UserInfoData, ValidateTokenData } from './user.d'
import { GET, Controller } from '@/utils'
import { useRequest } from '@/utils/request'

@Controller()
class UserService {
  @GET('/login.json')
  login (data:LoginParams) {

  }

  // logout () {
  //   return this.request<boolean>(this.setUrl('/logout.json'))
  // }

  // getUserInfo () {
  //   console.log(this)
  //   return this.request<UserInfoData>(this.setUrl('/userInfo.json'))
  // }

  // validateToken () {
  //   return this.request<ValidateTokenData>(this.setUrl('/validateToken.json'))
  // }
}

const userService = new UserService()
console.log(userService)
export { userService }
