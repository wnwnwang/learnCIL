
import VueRouter from 'vue-router'
import Home from '../components/Home'
import About from '../components/About'
import Vue from 'vue'

Vue.use(VueRouter)

const routes = [
    {
        path:'',
        redirect:'/home'
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/about',
        component:About
    }
]

const router = new VueRouter({
    mode:'history',
    routes
})

export default router