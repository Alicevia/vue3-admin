import { defineStore } from 'pinia'

const a = defineStore('xx', () => {
  return {
    count: ref(1)
  }
})

export { a }
