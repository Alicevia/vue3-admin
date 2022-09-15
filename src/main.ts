import { createApp } from 'vue'
import store from './stores'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(store)
app.use(router)
const a = [1]
a.at(0)
console.log(a)

app.mount('#app')
console.log(import.meta.env)
