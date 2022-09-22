import type { LoginData } from './../api/user/user.d'
import { TOKEN } from '@/constants'
import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import { userService, type LoginParams } from '@/api'
import { ref } from 'vue'
function useToken () {
  const token = useStorage<string>(TOKEN, null)
  const clearToken = () => {
    token.value = null
  }
  return {
    token,
    clearToken
  }
}

export const useUserStore = defineStore('user', () => {
  const tokenState = useToken()
  const clearStore = () => {
    tokenState.clearToken()
  }
  const userInfo = reactive({})
  return { ...tokenState, clearStore }
})

function useLogin () {
  const userInfo = ref<LoginData>({ name: undefined, age: undefined })
  const result = userService.login()
  const login = async (data:LoginParams) => {
    await result.execute({ data })
    if (result.error.value) return Promise.reject(result.error)
    userInfo.value = result.data.value

    $message.success('登录成功')
  }
}
