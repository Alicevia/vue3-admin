import { renderIcon } from '@/components/RenderIcon'
import { WHITE_LIST } from '@/constants'
import { setupLayouts } from 'virtual:generated-layouts'
import routes from '~pages'
import { iconMap } from './iconList'
import type { RouteRecordRaw } from 'vue-router'
import router from '@/router'
export function useCreateRouteAndMenu (routeAuth) {
  const privateRoutes = setupLayouts([...routes]).filter(item => !WHITE_LIST.includes(item.path))

  const menuList = computed(() => {
    return generateMenu(routes) ?? []
  })
  const clearRoutesCbStack = ref([])
  const initRoutes = () => {
    privateRoutes.forEach((route: RouteRecordRaw) => {
      clearRoutesCbStack.value.push(router.addRoute(route))
    })
    console.log(privateRoutes, router.getRoutes())
  }
  const clearRoutes = () => {
    clearRoutesCbStack.value.forEach((removeRoute) => removeRoute())
    clearRoutesCbStack.value = []
  }
  return { menuList, initRoutes, clearRoutes }
}
function generateMenu (routes) {
  if (Array.isArray(routes) && routes.length > 0) {
    return routes.filter(item => item.meta.isMenu !== false).sort((a, b) => {
      return (a.meta.sort ?? 1) - (b.meta.sort ?? 2)
    }).map(item => {
      if (item.meta?.icon) {
        return { icon: () => renderIcon(iconMap[item.meta.icon]), title: item.meta.title, key: item.path, children: generateMenu(item.children) }
      } else {
        return { title: item.meta.title, key: item.path, children: generateMenu(item.children) }
      }
    })
  } else {
    return undefined
  }
}
