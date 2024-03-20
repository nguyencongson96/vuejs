// Import necessary dependencies and styles
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/font.css'
import './assets/css/root.css'
import './assets/css/main.scss'
import './assets/css/fontawesome-all.min.css'
import "./assets/css/vuefity-modified.scss"

// Import Vue and other dependencies
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue3Toasity from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

// Create Vuetify instance
const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'dark'
    },
    defaults: {
        global: {
            ripple: true,
        },
        VImg: {
            // Use default slot to set lazy-src attribute
            $_vuetify_subcomponents: {
                // Override the default slot of VImg
                img: {
                    // Set the default lazy-src attribute value
                    default: { 'lazy-src': '/img/default.jpg' }
                }
            }
        },
    },
})

// Create Vue app
const app = createApp(App)
app.config.globalProperties = {
    $drink: {},
    $playlist: {},
    $genre: {},
    $flavor: {},
    $loading: false
}
 
app.use(router)
app.use(vuetify)
app.use(Vue3Toasity, {
    autoClose: 3000,
    theme: "dark"
})


// Mount the app
app.mount('#app')

export default app