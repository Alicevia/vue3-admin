import { createApp } from 'vue'
import { registerPinia } from './stores'
import App from './App.vue'
import router from './router'

const app = createApp(App)
registerPinia(app)

app.use(router)
app.mount('#app')
