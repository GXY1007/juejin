import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Recommended from '../components/subnavs/Recommended.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: '/',
        component: Recommended
      },
      {
        path: '/recommended',
        component: Recommended
      },
      {
        path: '/following',
        component: () => import('../components/subnavs/Following.vue')
      },
      {
        path: '/backend',
        component: () => import('../components/subnavs/Backend.vue')

      },
      {
        path: '/frontend',
        component: () => import('../components/subnavs/Frontend.vue')

      },
      {
        path: '/android',
        component: () => import('../components/subnavs/Android.vue')

      },
      {
        path: '/ios',
        component: () => import('../components/subnavs/Ios.vue')

      },
      {
        path: '/ai',
        component: () => import('../components/subnavs/AI.vue')

      },
      {
        path: '/freebie',
        component: () => import('../components/subnavs/Freebie.vue')

      },
      {
        path: '/career',
        component: () => import('../components/subnavs/Career.vue')

      },
      {
        path: '/article',
        component: () => import('../components/subnavs/Article.vue')

      },
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
