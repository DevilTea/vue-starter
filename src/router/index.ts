import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'home',
      path: '/home',
      alias: '/',
      component: () => import('@/pages/Home.vue'),
    },
    {
      name: 'about',
      path: '/about',
      component: () => import('@/pages/About.vue'),
    },
  ],
})

export {
  router,
}
