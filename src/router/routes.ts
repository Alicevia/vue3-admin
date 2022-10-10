import { WHITE_LIST } from '@/constants'
import routes from '~pages'
export const publicRoutes = routes.filter(item => WHITE_LIST.includes(item.path))
export const privateRoutes = routes.filter(item => !WHITE_LIST.includes(item.path))
