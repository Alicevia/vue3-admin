<template>
  <div>
    <n-button @click="logout">
      退出
    </n-button>

    <ul ref="ulRef" class="container">
      <li
        v-for="(item,index) in list"
        :key="item.title" class="item"
        draggable="true"
        @dragover="dragOver($event,index)"
        @dragenter="dragEnter($event,index)"
        @dragleave="dragLeave($event,index)"
        @drop="drop($event,index)"
        @dragstart="dragStart($event,index)"
      >
        <div class="i-line-md:alert"></div>
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores'
const userStore = useUserStore()

const router = useRouter()
const ulRef = ref(null)

const logout = () => {
  userStore.logout().finally(() => {
    router.replace('/login')
  })
}
const list = ref([
  { title: 'a113' },
  { title: 'absdfc2' },
  { title: 'abc3' },
  { title: 'abc4' }
])
let current
const dragStart = (e, index) => {
  e.dataTransfer.setData('text/plain', 'i love you')
  console.log('dragStart', e)
  current = index
}

const dragOver = (e, index) => {
  e.preventDefault()
  // console.log(e)
}

const drop = (e, index) => {
  console.log('drop', e)
}
const dragEnter = (e, index) => {
  console.log(e, index)
  if (index == current) return
  const a = list.value[current]
  const b = list.value[index]
  list.value[current] = b
  list.value[index] = a
  current = index
  console.log(current, 'current')
  // ulRef.value.insertBefore(current, e.target)

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
    sort: 1
</route>
