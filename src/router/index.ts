import { WHITE_LIST } from './../constants/index'
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import { useUserStore } from '@/stores'
import routes from '~pages'

// const routes = []
console.log(routes)
const baseRoute = setupLayouts(routes.filter(item => WHITE_LIST.includes(item.path)))
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: baseRoute
})

router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore()

  $loadingBar?.start()
  const token = userStore.getToken()
  if (token) {
    if (!userStore.isLogin) {
      try {
        await userStore.validateToken()
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
