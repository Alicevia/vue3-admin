<template>
  <div>{{ title }}</div>
</template>

<script setup lang='ts'>
defineProps({
  title: {
    type: String,
    default: 'footer'
  }
})
</script>
<style scoped>
</style>
