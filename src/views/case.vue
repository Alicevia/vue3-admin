<template>
  case-header
  <router-view></router-view>
  case-footer
</template>

<script setup lang='ts'>
import routes from '~pages'
console.log('routes', routes)
</script>
<style scoped>
</style>
<route lang="yaml">
  meta:
    title: 案例
    icon: BookOutline
</route>
