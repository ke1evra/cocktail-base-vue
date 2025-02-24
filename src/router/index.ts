import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: 'home',
      redirect: { name: 'cocktails' },
    },
    {
      path: 'c',
      name: 'cocktails',
      component: () => import('../views/CocktailsView.vue'),
      children: [
        {
          path: ':cocktailCode',
          name: 'cocktailPage',
          component: () => import('../components/CocktailContent.vue'),
        },
      ],
    },
  ],
});

export default router;
