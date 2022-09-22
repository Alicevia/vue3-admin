import type { TestData, LoginParams, LoginData } from './user.d'
import { BaseService } from '@/utils/service'

class UserService extends BaseService {
  getTest () {
    return this.get<TestData>(this.setUrl('/test.json'))
  }

  login (data?:LoginParams) {
    return this.get<LoginData>(this.setUrl('/login.json'), { data })
  }
}
const userService = new UserService('')
export { userService }
