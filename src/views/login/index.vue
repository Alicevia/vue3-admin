<template>
  <n-form ref="formRef" :model="model" style="width:400px" label-width="auto" :inline="false" label-placement="left">
    <n-form-item path="username" label="用户名">
      <n-input v-model:value="model.username"></n-input>
    </n-form-item>
    <n-form-item path="password" label="密码">
      <n-input
        v-model:value="model.password"
        type="password"
      ></n-input>
    </n-form-item>
    <n-button :loading="isLoading" round type="primary" @click="login">
      登录
    </n-button>
  </n-form>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { userService, type LoginParams } from '@/api'

const model:LoginParams = reactive({
  password: undefined,
  username: undefined
})

const { data, error, isLoading, execute } = userService.login(model)
const login = async () => {
  await execute()
  if (error.value) return Promise.reject(error)
  $message.success('登录成功')
}

</script>

<style scoped></style>
<route lang="yaml">
meta:
  layout: custom
</route>
