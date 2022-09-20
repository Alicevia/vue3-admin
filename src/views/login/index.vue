<template>
  <div>
    <div>{{ data }}</div>
    <n-button>
      执行
    </n-button>
  </div>
</template>

<script setup lang="ts">
import { userService } from '@/api'

// const { data } = userService.getTest2()
const { data, error } = userService.getTest()
console.log(error)
</script>
<style scoped></style>
<route lang="yaml">
meta:
  layout: custom
</route>
