import { defineStore } from 'pinia'

export const useHeroStore = defineStore('hero', () => {
  const hero = ref('null')

  return { hero }
})
