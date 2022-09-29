import { createPinia, defineStore } from 'pinia'
import { useUserStore } from './user'
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

const registerPinia = (app:App) => {
  app.use(store)
  userStore = useUserStore()
  appStore = useAppStore()
}

export { registerPinia, userStore, appStore }
