<template>
  <n-menu v-model:value="value" v-model:expanded-keys="expandedKeys" :options="userStore.menuList"></n-menu>
</template>

<script setup lang='ts'>
import { userStore } from '@/stores'
const route = useRoute()
const expandedKeys = ref(route.matched.map((route) => route.name).filter(item => item))
const value = ref(route.name)

watch(() => route.name, v => {
  value.value = v
})
</script>
<style scoped>
</style>
