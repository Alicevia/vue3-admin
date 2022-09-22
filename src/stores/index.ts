import { createPinia, defineStore } from 'pinia'
import { useUserStore } from './user'
import { useHeroStore } from './someModule'
import type { App } from 'vue'
const store = createPinia()

const useAppStore = defineStore('app', () => {
  const clearAllStore = () => {
    userStore.clearStore()
  }
  return {
    clearAllStore
  }
})

let appStore: ReturnType<typeof useAppStore>
let userStore:ReturnType<typeof useUserStore>
let heroStore:ReturnType<typeof useHeroStore>

const registerPinia = (app:App) => {
  app.use(store)
  userStore = useUserStore()
  heroStore = useHeroStore()
  appStore = useAppStore()
}

export { registerPinia, userStore, heroStore, appStore }
