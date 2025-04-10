import HomePage from "../components/HomePage.vue"
import LoginPage from "../components/LoginPage.vue"
import RedirectPage from "../components/RedirectPage.vue"
import UserPage from "../components/UserPage.vue"
import{createRouter,createWebHistory} from 'vue-router'

const routes=[
    {
        path:'/',
        name:'home',
        component:HomePage
    },
    {
        path:'/login',
        name:'login',
        redirect:'/redirect',
        component:LoginPage
    },
    {
        path:'/redirect',
        name:'redirect',
        component:RedirectPage
    },
    {
        path:'/user/:name',
        name:'user',
        component:UserPage
       
    },
    
]

const router =createRouter({
    history:createWebHistory(),
    routes
})

export default router

