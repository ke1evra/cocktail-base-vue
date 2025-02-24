import { ref, reactive } from 'vue';
import { defineStore } from 'pinia';
import type { Drink } from '@/types';
import { getDrinksSearch } from '@/api/modules/cocktails.ts';
import { BASE_COCKTAIL_CODES } from '@/constants';
import { useToggle } from '@vueuse/core';

export const useCocktailsStore = defineStore('cocktails', () => {
  const cocktailsCodes = ref(BASE_COCKTAIL_CODES);

  const cocktailsMap = reactive<Record<string, Drink[]>>({});
  const [isLoading, toggleLoading] = useToggle();

  const getCocktail = async (cocktailCode: string) => {
    if (!cocktailsMap[cocktailCode]) {
      {
        try {
          toggleLoading(true);
        } catch (error) {
          console.error(error);
        } finally {
          toggleLoading(false);
        }
        const response = await getDrinksSearch(cocktailCode);

        cocktailsMap[cocktailCode] = response.drinks;
      }

      return cocktailsMap[cocktailCode];
    }
  };

  return {
    cocktailsCodes, //
    cocktailsMap,
    isLoading,

    getCocktail,
  };
});
