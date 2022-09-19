import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const token = useStorage<string>('token', '')

  return { token }
})
