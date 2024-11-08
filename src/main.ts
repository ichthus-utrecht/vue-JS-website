import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/scss/app.scss'
import './assets/scss/frontend.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

createApp(App).use(router).mount('#app')
