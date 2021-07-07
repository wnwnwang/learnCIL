
import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const routes = [
    {
        path:'',
        redirect:'/home'
    },
    {
        path:'/home',
        component:() => import('../components/Home')
    },
    {
        path:'/about',
        component:() => import('../components/About')
    },
    {
        path:'/user/:userid',
        component:() => import('../components/User')
    },
    {
        path:'/login',
        component:() => import('../components/Login')
    }
]

const router = new VueRouter({
    mode:'history',
    routes
})

router.beforeEach()

export default router