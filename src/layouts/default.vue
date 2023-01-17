<template>
  <n-layout style="height: 100vh">
    <n-layout-header style="height: 64px" bordered>
      <Header title="deafult-header" />
    </n-layout-header>
    <n-layout position="absolute" style="top: 64px; bottom: 64px" has-sider>
      <n-layout-sider :native-scrollbar="false" bordered>
        <Menu />
      </n-layout-sider>
      <n-layout content-style="padding: 24px;" :native-scrollbar="false">
        <router-view v-slot="{ Component, }">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </n-layout>
    </n-layout>
    <n-layout-footer position="absolute" style="height: 64px; " bordered>
      <Footer title="deafult-footer" />
    </n-layout-footer>
  </n-layout>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
