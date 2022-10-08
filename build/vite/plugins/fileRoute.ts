import Pages from 'vite-plugin-pages'
export default () => {
  return Pages({
    dirs: 'src/views',
    exclude: ['**/components/*.vue']

  })
}
