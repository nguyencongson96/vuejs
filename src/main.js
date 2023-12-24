import './assets/css/main.scss'
import "./assets/css/fontawesome-all.min.css"
import 'bootstrap/dist/css/bootstrap.css';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import routes from './router';

const router = createRouter({
    history: createWebHistory(),
    routes,
})
  
const app = createApp(App)
app.use(router)
app.mount('#app')
