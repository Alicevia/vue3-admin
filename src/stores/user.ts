import { TOKEN } from '@/constants'
import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
function useToken () {
  const token = useStorage<string>(TOKEN, null)
  const clearToken = () => {
    token.value = null
  }
  return {
    token,
    clearToken
  }
}

export const useUserStore = defineStore('user', () => {
  const tokenState = useToken()
  const clearStore = () => {
    tokenState.clearToken()
  }
  return { ...tokenState, clearStore }
})
