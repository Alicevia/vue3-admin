import { renderIcon } from '@/components/RenderIcon'
import routes from '~pages'
import { iconMap } from './iconList'

export function useCreateRouteAndMenu (routeAuth) {
  const routeList = computed(() => {
    return routes
  })

  const menuList = computed(() => {
    return generateMenu(routeList.value) ?? []
  })
  return { menuList, routeList }
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
