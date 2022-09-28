import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'
import { setupLayouts } from 'virtual:generated-layouts'
import { userStore } from '@/stores'
const temp = setupLayouts(routes)
console.log(routes, temp)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: temp
})

router.beforeEach(async (to, from, next) => {
  const token = userStore.getToken()
  console.log(to.path, token, userStore.isLogin)
  if (token) {
    if (!userStore.isLogin) {
      try {
        await userStore.validateToken()
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
})
export default router
