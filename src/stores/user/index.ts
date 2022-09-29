import { defineStore } from 'pinia'
import {
  BookOutline

} from '@vicons/ionicons5'
import { useMyStorage } from './useMyStorage'
import { useCreateRouteAndMenu } from './useRouteMenu'
console.log(BookOutline)

export const useUserStore = defineStore('user', () => {
  const storage = useMyStorage()

  const clearStore = () => {
    isLogin.value = false
    userInfo.value = {}
    storage.clear()
  }

  return {
    ...storage,
    ...useCreateRouteAndMenu(),
    clearStore,
    getUserBaseInfo,
    validateToken,
    logout,
    useLogin,
    userInfo
  }
})
