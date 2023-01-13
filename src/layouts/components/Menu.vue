<template>
  <n-menu v-model:expanded-keys="expandedKeys" :value="value" :options="userStore.menuList"></n-menu>
</template>

<script setup lang='ts'>
import { userStore } from '@/stores'
const route = useRoute()
const expandedKeys = ref(route.matched.map(item => item.name as string).filter(item => item))
const value = ref(route.name as string)
watch(() => route.name, (v) => {
  value.value = v as string
})

</script>
<style scoped>
</style>
