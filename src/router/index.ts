import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import { publicRoutes } from './routes'
import { userStore } from '@/store'
import { getToken } from '@/utils'

export * from './routes'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: setupLayouts(publicRoutes),
})

router.beforeEach(async (to, from, next) => {
  $loadingBar?.start()
  const token = getToken()
  if (token) {
    if (!userStore.value.isLogin) {
      try {
        await userStore.value.validateToken()
        return next(to)
      } catch (error) {
        return next('/login')
      }
    }
    if (to.name === 'login') {
      return next('/')
    }

    return next()
  } else {
    if (to.name === 'login') {
      return next()
    }
    return next('/login')
  }
})
const docTitle = useTitle()

router.afterEach((to) => {
  $loadingBar?.finish()
  docTitle.value = to.matched.map(item => item.meta.label).filter(item => item).join('-')
})
export default router
