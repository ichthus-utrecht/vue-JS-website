import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/scss/app.scss'
import './assets/scss/frontend.scss'

createApp(App).use(router).mount('#app')
