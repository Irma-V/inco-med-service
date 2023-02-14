import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from "./router"
import VueAgile from 'vue-agile'
// import './index.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
app.use(VueAgile)