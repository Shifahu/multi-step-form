import { createRouter, createWebHistory } from 'vue-router'
import Shell from 'pages/Shell.vue'

const routes = [
    {
        path: '',
        name: 'Shell',
        component: Shell,
        props: true, 
        children: [
            {
                path: 'page/1',
                name:'PageOne',
                component: () => import('@/pages/PageOne.Vue'),
                props: true
            },
            {
                path: 'page/2',
                name:'PageTwo',
                component: () => import('@/pages/PageTwo.Vue'),
                props: true
            },
            {
                path: 'page/3',
                name:'PageThree',
                component: () => import('@/pages/PageThree.Vue'),
                props: true
            },
            {
                path: 'page/4',
                name:'PageFour',
                component: () => import('@/pages/PageFour.Vue'),
                props: true
            },
        ]
    }
]

const rputer = createRouter({
    history:createWebHistory(),
    scrollBehavior(to, from, savedPosition){
        return {x: 0, y: 0}
    },
    routes,
})
export default router