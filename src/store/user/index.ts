import { defineStore } from 'pinia'
import { userService, type LoginParams } from '@/api'
import { useCreateRouteAndMenu } from './useRouteMenu'
import { clearStorage } from '@/utils'
import { useSign } from './useSign'
export const useUserStore = defineStore('user', () => {
  const isLogin = ref(false)
  const isLogging=ref(false)
  const { userInfo, getUserInfo ,sign, token }=useSign()
  const { menuList, initRoutes, clearRoutes } = useCreateRouteAndMenu(userInfo)

  const login =async (params:LoginParams) => {
    try {
      isLogging.value=true
      await sign(params)
      await getUserInfo()
      isLogin.value=true
    } finally{
      isLogging.value=false
    }
  }
  const logout = async () => {
    try {
      await userService.logout()
    } catch (error) {
      console.error(error)      
    }finally{
      clearStore()
    }
  }

  const validateToken = async () => {
    try {
      await userService.validateToken()
      await getUserInfo() 
      isLogin.value = true
      initRoutes()
    } catch (error) {
      clearStore()
      return Promise.reject(error)
    } 
  }
 

  const clearStore = () => {
    isLogin.value = false
    userInfo.value = {}
    clearStorage()
    clearRoutes()
  }
  return {
    clearStore,
    validateToken,
    token,
    login,
    logout,
    userInfo,
    menuList,
    isLogin,
  }
})
