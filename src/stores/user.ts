import { NAMESPACE, TOKEN } from '@/constants'
import { defineStore } from 'pinia'
import { useStorage, type MaybeRef } from '@vueuse/core'
import { userService, type LoginParams, type UserInfoData } from '@/api'
import routes from '~pages'
import type { Ref } from 'vue'
console.log(routes)
interface IStorage {
  [TOKEN]?:string;
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

  return {
    clear,
    getToken,
    setToken

  }
}

export const useUserStore = defineStore('user', () => {
  const storage = useMyStorage()

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

  const clearStore = () => {
    isLogin.value = false
    userInfo.value = {}
    storage.clear()
  }
  return { ...storage, clearStore, getUserBaseInfo, validateToken, logout, useLogin, userInfo, ...useGenerateRoute(userInfo) }
})

const useGenerateRoute = (userInfo:Ref<UserInfoData>) => {
  const userRoute = computed(() => {
    console.log(userInfo)
    return routes
  })
  function generateMenu (routes) {
    if (Array.isArray(routes) && routes.length > 0) {
      return routes.filter(item => item.meta.isMenu !== false).sort((a, b) => {
        return (a.meta.sort ?? 1) - (b.meta.sort ?? 2)
      }).map(item => {
        return { title: item.meta.title, key: item.path, children: generateMenu(item.children) }
      })
    } else {
      return undefined
    }
  }
  const menuOptions = computed(() => {
    return generateMenu(userRoute.value) ?? []
  })

  return { menuOptions }
}
