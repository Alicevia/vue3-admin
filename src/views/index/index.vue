<template>
  <div>
    <n-button @click="logout">
      退出
    </n-button>

    <TransitionGroup ref="ulRef" tag="ul" name="list" class="container">
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
    </TransitionGroup>
    <div class="tz">
      alkdfalskd
    </div>
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
let current:number
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
  // console.log('drop', e)
}
const dragEnter = (e, index) => {
  e.preventDefault()
  if (index == current) return
  setTimeout(() => {
    const temp = list.value[index]
    list.value[index] = list.value[current]
    list.value[current] = temp
    console.log(current, index)
    current = index
  }, 30)
}
const dragLeave = (e, index) => {
  // console.log('dragLeave', e)
}

</script>

<style scoped>
.tz{
  cursor: e-resize;
  border: 1px solid black;
  height: 300px;
  width: 300px;
}
.list-move, /* 对移动中的元素应用的过渡 */
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

  .container{

  }
  .item {
    background-color: pink;
    padding: 10px;
    border-bottom: 1px solid white;

    }
</style>
<route lang="yaml">
  meta:
    label: 首页
    icon: GameControllerOutline
    sort: 1
</route>
