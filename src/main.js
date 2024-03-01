import './assets/css/font.css'
import './assets/css/root.css'
import './assets/css/main.scss'
import "./assets/css/fontawesome-all.min.css"
import { createApp } from 'vue';
import App from './App.vue'
import router from './router';

// Import Bootstrap styles
import 'bootstrap/dist/css/bootstrap.css';
  
const app = createApp(App)
app.use(router)
app.mount('#app')
