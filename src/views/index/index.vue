<template>
  <div>
    <n-button>退出</n-button>
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

</script>
<style scoped></style>
