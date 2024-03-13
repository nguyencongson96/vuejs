import HomePage from "@/views/Home.vue"
import LoginPage from "@/views/auth/Login.vue"
import RegisterPage from "@/views/auth/Register.vue"
import ForgotPage from "@/views/auth/Forgot.vue"
import Header from "@/layout/header.vue"
import Footer from "@/layout/footer.vue"
import RecipeHome from "@/views/recipe/recipeHome.vue"
import MatchGenreAndFlavor from "@/views/match/match_id.vue"
import AboutHome from "@/views/about/aboutHome.vue"
import { createRouter, createWebHistory } from "vue-router"

const route = [
    {
        name: 'login',
        path: '/auth/login',
        onlyMainLayout: true,
        component: LoginPage,
        meta: {
            title: 'Login'
        }
    },
    {
        name: 'signup',
        path: '/auth/register',
        onlyMainLayout: true,
        component: RegisterPage,
        meta: {
            title: 'Register'
        }
    },
    {
        name: 'forgot',
        path: '/auth/forgot',
        onlyMainLayout: true,
        component: ForgotPage,
        meta: {
            title: 'Forgot'
        }
    },
    {
        path: "/",
        components: {
            default: HomePage,
        },
        meta: {
            title: 'HomePage'
        }
    },
    {
        path: "/recipe",
        components: {
            default: RecipeHome,
        },
        meta: {
            title: 'Recipe'
        }
    },
    {
        path: "/match/:id",
        components: {
            default: MatchGenreAndFlavor,
        },
        meta: {
            title: 'Matched Drink'
        }
    },
    {
        path: "/about",
        components: {
            default: AboutHome,
        },
        meta: {
            title: 'About Us'
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: route.map(item => item.onlyMainLayout ? item : {...item, components: {...item.components, header: Header, footer: Footer} })
})
router.beforeEach((to) => {
    document.title = to.meta?.title ?? 'Default Title'
})

export default router
