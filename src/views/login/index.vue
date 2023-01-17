<template>
  <n-form ref="formRef" :model="model" style="width:400px" label-width="auto" :inline="false" label-placement="left">
    <n-form-item path="username" label="用户名">
      <n-input v-model:value="model.username"></n-input>
    </n-form-item>
    <n-form-item path="password" label="密码">
      <n-input v-model:value="model.password" type="password"></n-input>
    </n-form-item>
    <n-button :loading="userStore.isLogging" round type="primary" @click="login">
      登录
    </n-button>
  </n-form>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { userStore } from '@/store'
import type { LoginParams } from '@/api'

const model:LoginParams = reactive({
  password: undefined,
  username: undefined,
})
const router = useRouter()
const login = async () => {
  await userStore.value.login(model)
  router.replace('/')
}
</script>

<style scoped>

</style>
<route lang="yaml">
meta:
  layout: custom
  isMenu: false
  label: 登录
</route>
