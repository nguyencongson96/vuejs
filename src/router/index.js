import HomePage from "@/views/Home.vue"
import LoginPage from "@/views/auth/Login.vue"
import RegisterPage from "@/views/auth/Register.vue"
import ForgotPage from "@/views/auth/Forgot.vue"
import Header from "@/layout/header.vue"
import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'login',
            path: '/auth/login',
            component: LoginPage,
            meta: {
                title: 'Login'
            }
        },
        {
            name: 'signup',
            path: '/auth/register',
            component: RegisterPage,
            meta: {
                title: 'Register'
            }
        },
        {
            name: 'forgot',
            path: '/auth/forgot',
            component: ForgotPage,
            meta: {
                title: 'Forgot'
            }
        },
        {
            path: "/",
            components: {
                default: HomePage,
                header: Header,
            },
            meta: {
                title: 'HomePage'
            }
        },
    ],
})
router.beforeEach((to) => {
    document.title = to.meta?.title ?? 'Default Title'
})

export default router
