import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: "/examples",
      component: () => import("../views/ExamplesView.vue")
    }
  ]
})

export default router
