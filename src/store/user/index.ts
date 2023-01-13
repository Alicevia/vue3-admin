import { defineStore } from 'pinia'
import { userService, type LoginParams, type UserInfoData } from '@/api'
import { useCreateRouteAndMenu } from './useRouteMenu'
import { setToken,clearStorage } from '@/utils'

export const useUserStore = defineStore('user', () => {
  const isLogin = ref(false)
  const userInfo = ref<UserInfoData>({})
  const { menuList, initRoutes, clearRoutes } = useCreateRouteAndMenu(userInfo)

  const useLogin = (model:LoginParams) => {
    const res = userService.login(model)
    const execute = async () => {
      await res.execute()
      if (res.error.value) {
        clearStore()
        return
      }
      try {
        res.isLoading.value = true
        await getUserBaseInfo()
        setToken(res.data.value)
      } catch (error:any) {
        res.error.value = error?.value
      }
      res.isLoading.value = false
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
    return await getUserBaseInfo()
  }
  const getUserBaseInfo = async () => {
    const { data, error, execute } = userService.getUserInfo()
    await execute()
    if (error.value) {
      clearStore()
      $message.error('获取用户信息失败,请重新登陆')
      return Promise.reject(error)
    }
    isLogin.value = true
    userInfo.value = data.value
    initRoutes()
  }

  const clearStore = () => {
    isLogin.value = false
    userInfo.value = {}
    clearStorage()
    clearRoutes()
  }
  return {
    clearStore,
    getUserBaseInfo,
    validateToken,
    logout,
    useLogin,
    userInfo,
    menuList,
    isLogin,
  }
})
