<template>
  <div>{{ title }}</div>
</template>

<script setup lang='ts'>
defineProps({
  title: {
    type: String,
    default: 'header'
  }
})
</script>
<style scoped>
</style>
