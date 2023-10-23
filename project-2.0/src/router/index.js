import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router

/**
 * import { createRouter, createWebHistory } from 'vue-router'
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
                component: PageOne,
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

const router = createRouter({
    history:createWebHistory(),
    scrollBehavior(to, from, savedPosition){
        return {x: 0, y: 0}
    },
    routes,
})
export default router
 */
