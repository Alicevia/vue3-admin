import { NAMESPACE, TOKEN } from '@/constants'
import { defineStore } from 'pinia'
import { useStorage, type MaybeRef } from '@vueuse/core'
import { userService, type LoginParams, type UserInfoData } from '@/api'
interface IStorage {
  [TOKEN]?:string;
  userInfo?:UserInfoData
}
function useMyStorage () {
  const storage = useStorage<IStorage>(NAMESPACE, { })
  const clear = () => {
    storage.value = {}
  }
  const getToken = () => {
    return storage.value.token
  }
  const setToken = (value:string) => {
    storage.value.token = value
  }
  const getUserInfo = () => {
    return storage.value.userInfo
  }
  const setUserInfo = (v:MaybeRef<UserInfoData>) => {
    storage.value.userInfo = resolveUnref(v)
  }

  return {
    clear,
    getToken,
    setToken,
    getUserInfo,
    setUserInfo

  }
}

export const useUserStore = defineStore('user', () => {
  const storage = useMyStorage()
  const isLogin = ref(false)
  const clearStore = () => {
    isLogin.value = false
    storage.clear()
  }
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
  const getUserBaseInfo = async () => {
    const { data, error, execute } = userService.getUserInfo()
    await execute()
    if (error.value) return Promise.reject(error)
    storage.setUserInfo(data)
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

  return { ...storage, clearStore, useLogin, getUserBaseInfo, logout, isLogin, validateToken }
})
