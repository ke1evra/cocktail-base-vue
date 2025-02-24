import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: 'home',
      redirect: '/b'
    },
    { path: '/a', redirect: { name: 'foo' }},
    {
      path: 'c',
      name: 'cocktails',
      component: () => import('../views/CocktailsPage.vue'),
      children: [{
        path: ':cocktailCode',
        name: 'cocktailPage',
        component: () => import('../views/CocktailContent.vue')
      }]
    },
  ],
})

export default router
