import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'
import { setupLayouts } from 'virtual:generated-layouts'
const temp = setupLayouts(routes)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: temp
})
export default router
