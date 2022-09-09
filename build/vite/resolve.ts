import { fileURLToPath, URL } from 'node:url'
const resolve = {
  alias: {
    '@': fileURLToPath(new URL('../../src', import.meta.url))
  }
}
export { resolve }
