import { createRouter, createWebHistory } from 'vue-router';
import { DEFAULT_COCKTAIL_CODE } from '@/constants';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: { name: 'cocktailPage', params: { cocktailCode: DEFAULT_COCKTAIL_CODE } },
    },
    {
      path: '/c',
      name: 'cocktails',
      component: () => import('../views/CocktailsView.vue'),
      redirect: { name: 'cocktailPage', params: { cocktailCode: DEFAULT_COCKTAIL_CODE } },
      children: [
        {
          path: ':cocktailCode',
          name: 'cocktailPage',
          component: () => import('../components/CocktailContent.vue'),
        },
      ],
    },

    { path: '/404', name: 'NotFound', component: () => import('../views/NotFoundView.vue') },
    { path: '/:pathMatch(.*)*', redirect: { name: 'NotFound' } },
  ],
});

export default router;
