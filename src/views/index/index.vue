<template>
  <div>
    <n-button @click="logout">
      退出12234233
    </n-button>
    <n-button @click="userStore.getToken">
      获取token
    </n-button>
    <n-button @click="userStore.setToken('234234')">
      设置token
    </n-button>
    <ul class="container">
      <li
        v-for="(item,index) in list"
        :key="item.title" class="item"
        draggable="true"
        @dragover="dragOver($event,index)"
        @dragenter="dragEnter($event,index)"
        @dragleave="dragLeave($event,index)"
        @drop="drop($event,index)"
        @dragstart="dragStart"
      >
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { userStore } from '@/stores'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

console.log(userStore, '?')
const router = useRouter()
const logout = () => {
  userStore.logout().finally(() => {
    router.replace('/login')
  })
}

const list = ref([
  { title: 'abc' },
  { title: 'abc2' },
  { title: 'abc3' },
  { title: 'abc4' }
])

const dragStart = (e) => {
  e.dataTransfer.setData('text/plain', 'i love you')
  console.log('dragStart', e)
  e.target.style.opacity = 0
}
const dragOver = (e, index) => {
  e.preventDefault()
  // console.log(e)
}

const drop = (e, index) => {
  console.log('drop', e)
}
const dragEnter = (e, index) => {
  console.log('dragEnter', e)
}
const dragLeave = (e, index) => {
  console.log('dragLeave', e)
}
</script>
<style scoped>
  .container{

  }
  .item {
    background-color: pink;
    margin-bottom: 10px;

    }
</style>
<route lang="yaml">
  meta:
    label: 首页
    icon: GameControllerOutline
</route>
