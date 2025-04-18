
import CartComponent from "../components/CartComponent.vue"
import {createRouter,createWebHistory} from 'vue-router'
import Layout from "../components/Layout.vue"
import CardBook from '../components/CardBook.vue'
import noBookExistComponent from "../components/noBookExistComponent.vue"



const routes=[
    {
        path:'/',
        name:'home',
        component: Layout
    },
    {
        path:'/cart',
        name:'cart',
        component:CartComponent
    },
    {
        path:'/card/:id',
        name:'cardBook',
        props: true,
        component:CardBook,
        
    },
    {
        path:'/noBook',
        name:'noBookExist',
        component:noBookExistComponent,
        
    },
    {
        path:'/noBook',
        redirect:'/noBook',       
    },
  
    
    
]

const router =createRouter({
    history:createWebHistory(),
    routes
})

export default router