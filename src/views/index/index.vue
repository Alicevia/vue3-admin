<template>
  <div>
    <n-button @click="logout">
      退出
    </n-button>
    <n-button @click="userStore.getToken">
      获取token
    </n-button>
    <n-button @click="userStore.setToken('234234')">
      设置token
    </n-button>
  </div>
</template>

<script setup lang="ts">
import { userStore } from '@/stores'
const router = useRouter()
const logout = () => {
  userStore.logout().finally(() => {
    router.replace('/login')
  })
}
</script>
<style scoped></style>
