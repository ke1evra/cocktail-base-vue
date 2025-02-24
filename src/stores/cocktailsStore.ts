import { ref, reactive } from 'vue';
import { defineStore } from 'pinia';
import type { Drink } from '@/types';
import { getDrinksSearch } from '@/api/modules/cocktails.ts';

export const useCocktailsStore = defineStore('counter', () => {
  const cocktailsCodes = ref(Object.freeze(['margarita', 'mojito', 'a1', 'kir']));

  const cocktailsMap = reactive<Record<string, Drink[]>>({});

  const getCocktail = async (cocktailCode: string) => {
    if (!cocktailsMap[cocktailCode]) {
      {
        const response = await getDrinksSearch(cocktailCode);

        cocktailsMap[cocktailCode] = response.drinks;
      }

      return cocktailsMap[cocktailCode];
    }
  };

  return { cocktailsCodes, getCocktail };
});
