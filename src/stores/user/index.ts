import { defineStore } from 'pinia'
import { userService, type LoginParams, type UserInfoData } from '@/api'

import { useMyStorage } from './useMyStorage'
import { useCreateRouteAndMenu } from './useRouteMenu'
export const useUserStore = defineStore('user', () => {
  const storage = useMyStorage()

  const isLogin = ref(false)
  const userInfo = ref<UserInfoData>({})
  const { menuList, initRoutes, clearRoutes } = useCreateRouteAndMenu(userInfo)

  const useLogin = (model:LoginParams) => {
    const res = userService.login(model)
    const execute:typeof res.execute = async () => {
      const { error } = await res.execute()
      if (error.value) {
        clearStore()
        return Promise.reject(error)
      }
      storage.setToken(res.data.value)
      await getUserBaseInfo()
      initRoutes()
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
      return Promise.reject(error)
    }
    isLogin.value = true
    userInfo.value = data.value
    initRoutes()
  }
  const clearStore = () => {
    isLogin.value = false
    userInfo.value = {}
    storage.clear()
    clearRoutes()
  }
  return {
    ...storage,
    clearStore,
    getUserBaseInfo,
    validateToken,
    logout,
    useLogin,
    userInfo,
    menuList,
    isLogin

  }
})
