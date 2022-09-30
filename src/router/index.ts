import { WHITE_LIST } from './../constants/index'
import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'
import { setupLayouts } from 'virtual:generated-layouts'
import { userStore } from '@/stores'

const baseRoute = setupLayouts(routes).filter(item => WHITE_LIST.includes(item.path))
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: baseRoute
})

router.beforeEach(async (to, from, next) => {
  $loadingBar?.start()

  const token = userStore.getToken()

  console.log(to.path, to.meta.title, to)
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
  docTitle.value = to.matched.map(item => item.meta.title).filter(item => item).join('-')
})
export default router
