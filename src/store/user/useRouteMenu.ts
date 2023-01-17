import { setupLayouts } from 'virtual:generated-layouts'
import { iconMap } from './iconList'
import { RouterLink, type RouteRecordRaw } from 'vue-router'
import { renderIcon } from '@/components/RenderIcon'
import router, { privateRoutes as _routes } from '@/router'

import type { MenuOption } from 'naive-ui'
import type { UserInfoData } from '@/api'
import type { Ref } from 'vue'

export function useCreateRouteAndMenu (userInfo:Ref<UserInfoData>) {
  const privateRoutes = computed(() => {
    return generateRoute(_routes, userInfo.value.auth ?? [])
  })

    
  const menuList = computed(() => {
    return generateMenu(privateRoutes.value) ?? []
  })
  const clearRoutesCbStack = ref([])
  const initRoutes = () => {
  //  setupLayouts将会为每个最外层路由添加layout
    const  route=setupLayouts(privateRoutes.value)
    console.log(router)
    route.forEach((route: RouteRecordRaw) => {
      clearRoutesCbStack.value.push(router.addRoute(route))
    })
  }
  const clearRoutes = () => {
    clearRoutesCbStack.value.forEach((removeRoute) => removeRoute())
    clearRoutesCbStack.value = []
  }
  return { menuList, initRoutes, clearRoutes }
}

function generateMenu (routes:RouteRecordRaw[]):MenuOption[] {
  if (Array.isArray(routes) && routes.length > 0) {
    return routes.filter(item => item.meta?.isMenu !== false).sort((a, b) => {
      return (a.meta?.sort ?? 1) - (b.meta?.sort ?? 2)
    }).map(item => {
      return {
        icon: item.meta?.icon && renderIcon(iconMap[item.meta.icon]),
        label: item.children.length
          ? item.meta?.label
          : () => h(
            RouterLink,
            {
              to: {
                name: item.name,
              },
            },
            { default: () => item.meta?.label },
          ),
        key: item.name as string,
        children: generateMenu(item.children),
      }
    })
  } else {
    return undefined
  }
}

function generateRoute (routes, auth) {
  return routes.reduce((pre, item) => {
    const isExist = auth.includes(item.name)
    let child = []
    if (item.children?.length) {
      child = generateRoute(item.children, auth)
    }
    if (child.length) {
      pre.push({ ...item, children: child })
    } else if (isExist) {
      pre.push({ ...item, children: [] })
    }

    return pre
  }, [])
}
