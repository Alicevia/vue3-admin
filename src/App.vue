<template>
  <AppGlobalSetting>
    <router-view></router-view>
  </AppGlobalSetting>
</template>
<script setup lang="ts">
import { getTest } from './api'
import { request } from './utils/request'
request('/public/test.json')
const { data } = getTest({})
console.log(data)
</script>

<style scoped>

</style>
