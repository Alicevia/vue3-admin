<template>
  <div>
    <n-button @click="$router.push('/case/list')">
      to list
    </n-button>
  </div>
</template>

<script setup lang="ts"></script>
<style scoped>
</style>
<route lang="yaml">
  meta:
    title: 案例
</route>
