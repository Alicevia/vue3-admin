import { fileURLToPath, URL } from 'node:url'
const createViteResolve = () => {
  return {
    alias: {
      '@': fileURLToPath(new URL('../../src', import.meta.url))
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']

  }
}
export { createViteResolve }
