import HomePage from "@/views/Home.vue"
import LoginPage from "@/views/auth/Login.vue"
import RegisterPage from "@/views/auth/Register.vue"
import ForgotPage from "@/views/auth/Forgot.vue"
import Header from "@/layout/header.vue"
import RecipeHome from "@/views/recipe/recipeHome.vue"
import MatchGenreAndFlavor from "@/views/match/matchGenreAndFlavor.vue"
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
        {
            path: "/recipe",
            components: {
                default: RecipeHome,
                header: Header,
            },
            meta: {
                title: 'Recipe'
            }
        },
        {
            path: "/match",
            components: {
                default: MatchGenreAndFlavor,
                header: Header,
            },
            meta: {
                title: 'Matched Drink'
            }
        },
    ],
})
router.beforeEach((to) => {
    document.title = to.meta?.title ?? 'Default Title'
})

export default router
