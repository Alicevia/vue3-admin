import { userService ,type LoginParams , type UserInfoData } from '@/api'
import { setToken ,getToken } from '@/utils'

export const useSign = () => {
  const token = resolveRef(getToken)
  const userInfo = ref<UserInfoData>({})
 
  const sign = async (params:LoginParams) => {
    const { data }=await userService.login(params)
    setToken(data.data)
  }
  const getUserInfo=async () => {
    const { data }= await userService.getUserInfo() 
    userInfo.value = data.data
  }
 
  
  return { sign, userInfo,getUserInfo,token }
}