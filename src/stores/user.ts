import { TOKEN } from '@/constants'
import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import { userService, type LoginParams } from '@/api'
function useToken () {
  const token = useStorage<string>(TOKEN, null)
  const clearToken = () => {
    token.value = null
  }
  const getToken = () => {
    return token.value
  }
  const setToken = (value:string) => {
    token.value = value
  }

  return {
    token,
    clearToken,
    getToken,
    setToken
  }
}

export const useUserStore = defineStore('user', () => {
  const tokenState = useToken()
  const clearStore = () => {
    tokenState.clearToken()
  }
  const useLogin = (model:LoginParams) => {
    const res = userService.login(model)
    const execute:typeof res.execute = async () => {
      const { error } = await res.execute()
      if (error.value) {
        tokenState.clearToken()
        return Promise.reject(error)
      }
      tokenState.setToken(res.data.value)
    }
    return { ...res, execute }
  }
  return { ...tokenState, clearStore, useLogin }
})
