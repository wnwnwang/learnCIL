
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home'
import About from '../components/About'

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes:[
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
})

export default router