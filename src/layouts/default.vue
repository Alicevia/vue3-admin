<template>
  <div>
    <Header title="deafult-header"></Header>
    <router-view></router-view>
    <Footer title="deafult-footer"></Footer>
  </div>
</template>

<script setup lang="ts">
import { userStore } from '@/stores'

userStore.getUserBaseInfo()
</script>
<style scoped></style>
