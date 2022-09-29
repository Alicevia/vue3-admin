import Pages from 'vite-plugin-pages'
import * as icons from '@vicons/ionicons5'
export default () => {
  return Pages({
    dirs: 'src/views',
    exclude: ['**/components/*.vue']

  })
}
