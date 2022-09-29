import { userService, userService, type LoginParams, type UserInfoData } from '@/api'

export function useSignIn () {
  const isLogin = ref(false)
  const userInfo = ref<UserInfoData>({})
  const useLogin = (model:LoginParams) => {
    const res = userService.login(model)
    const execute:typeof res.execute = async () => {
      const { error } = await res.execute()
      if (error.value) {
        clearStore()
        return Promise.reject(error)
      }
      isLogin.value = true
      storage.setToken(res.data.value)
    }
    return { ...res, execute }
  }
  const logout = async () => {
    const { execute, error } = userService.logout()
    await execute()
    clearStore()
    if (error.value) return Promise.reject(error)
  }
  const validateToken = async () => {
    const { error, execute } = userService.validateToken()
    await execute()
    if (error.value) {
      clearStore()
      return Promise.reject(error)
    }
    isLogin.value = true
  }
  const getUserBaseInfo = async () => {
    const { data, error, execute } = userService.getUserInfo()
    await execute()
    if (error.value) return Promise.reject(error)
    userInfo.value = data.value
  }
  return { isLogin, userInfo, getUserBaseInfo, validateToken, logout }
}
