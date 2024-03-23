import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    console.log(savedPosition);
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      // Scroll to the element with the given hash
      const element = document.querySelector(to.hash);
      if (element) {
        return { el: element };
      }
    }
    return { left: 0, top: 0 };
  }
});

export default router
