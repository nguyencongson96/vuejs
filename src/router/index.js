import HomePage from "@/views/Home.vue"
import LoginPage from "@/views/auth/Login.vue"
import RegisterPage from "@/views/auth/Register.vue"
import ForgotPage from "@/views/auth/Forgot.vue"
import Header from "@/layout/header.vue"

const routes = [
    {
        name: 'login',
        path: '/auth/login',
        component: LoginPage,
    },
    {
        name: 'signup',
        path: '/auth/register',
        component: RegisterPage,
    },
    {
        name: 'forgot',
        path: '/auth/forgot',
        component: ForgotPage,
    },
    {
        path: "/",
        components: {
            default: HomePage,
            header: Header
        },
    },
]

export default routes
