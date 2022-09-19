import { createPinia } from 'pinia'
import { useUserStore } from './user'
import { useHeroStore } from './someModule'
import type { App } from 'vue'

const store = createPinia()
let userStore, heroStore
const registerPinia = (app:App) => {
  app.use(store)
  userStore = useUserStore()
  heroStore = useHeroStore()
}

export { registerPinia, userStore, heroStore }
