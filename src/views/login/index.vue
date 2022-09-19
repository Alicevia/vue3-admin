<template>
  <div>
    <div>{{ data }}</div>
    <n-button @click="execute">
      执行
    </n-button>
  </div>
</template>

<script setup lang="ts">
import { getTest } from '@/api'

const { data, execute } = getTest()
console.log(data)

</script>
<style scoped></style>
<route lang="yaml">
meta:
  layout: custom
</route>
