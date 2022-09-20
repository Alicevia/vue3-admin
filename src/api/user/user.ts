import type { TestData } from './user.d'
import { BaseService } from '@/utils/service'

class UserService extends BaseService {
  getTest () {
    return this.get<TestData>(this.setUrl('/test.json'))
  }

  getTest2 () {
    return this.get<TestData>(this.setUrl('/test2.json'))
  }
}
const userService = new UserService('')
export { userService }
