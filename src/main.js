import './assets/css/font.css'
import './assets/css/root.css'
import './assets/css/main.scss'
import './assets/css/fontawesome-all.min.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'

// Import Bootstrap styles
import 'bootstrap/dist/css/bootstrap.css'

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
        VSheet: {
            elevation: 4,
        },
    },
})

const app = createApp(App)
app.use(router).use(vuetify).mount('#app')
