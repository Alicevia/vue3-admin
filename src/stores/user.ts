import { TOKEN } from '@/constants'
import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

function useToken () {
  const token = useStorage(TOKEN, '')

  return {
    token
  }
}

export const useUserStore = defineStore('user', () => {
  const token = useStorage<string>('token', '')

  return { token }
})
