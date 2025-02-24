import { ref, reactive } from 'vue';
import { defineStore } from 'pinia';
import type { Drink } from '@/types';
import { getDrinksSearch } from '@/api/modules/cocktails.ts';
import { BASE_COCKTAIL_CODES } from '@/constants';

export const useCocktailsStore = defineStore('cocktails', () => {
  const cocktailsCodes = ref(BASE_COCKTAIL_CODES);

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
