<template>
  <div class="p-3 flex flex-col gap-3">
    <div v-for="cocktail in cocktails" class="p-3 bg-white flex flex-col gap-3" :key="cocktail.idDrink">
      <div class="grid grid-cols-[2fr_1fr] gap-3">
        <div class="flex flex-col gap-3">
          <div class="text-lg">{{ cocktail.strDrink }}</div>
          <div class="flex flex-col">
            <div>{{ cocktail.strCategory }}</div>
            <div>{{ cocktail.strAlcoholic }}</div>
            <div>{{ cocktail.strGlass }}</div>
          </div>
          <div class="flex flex-col">
            <div class="text-xs uppercase text-light text-stone-500 mb-1">Instructions:</div>
            <div>{{ cocktail.strInstructions }}</div>
          </div>
        </div>
        <div class="">
          <img :src="cocktail.strDrinkThumb" loading="lazy" class="sticky top-3" />
        </div>
      </div>
      <div class="flex flex-col">
        <div class="text-xs uppercase text-light text-stone-500 mb-1">List of ingredients:</div>
        <div v-for="ingredient in getIngredientsForCocktail(cocktail)" class="flex" :key="ingredient.ingredient">
          <div>{{ ingredient.ingredient }}</div>
          <div v-if="ingredient.measure">&nbsp;&mdash;&nbsp;{{ ingredient.measure }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';

const route = useRoute();

import { useCocktailsStore } from '@/stores/cocktailsStore.ts';
import { computed, watch } from 'vue';
import type { Drink } from '@/types';
import router from '@/router';

const cocktailsStore = useCocktailsStore();

const { getCocktail, cocktailsMap, cocktailsCodes } = cocktailsStore;

const cocktailCode = computed(() =>
  Array.isArray(route.params.cocktailCode) ? route.params.cocktailCode[0] : route.params.cocktailCode,
);

const cocktails = computed(() => cocktailsMap[cocktailCode.value]);

const getIngredientsForCocktail = (cocktail: Drink) => {
  const ingredients: { ingredient: string; measure: string }[] = [];

  for (let i = 1; i <= 15; i++) {
    const ingredient = cocktail[`strIngredient${i}` as keyof Drink];
    const measure = cocktail[`strMeasure${i}` as keyof Drink];

    if (ingredient) {
      ingredients.push({ ingredient, measure: measure ?? '' });
    }
  }

  return ingredients;
};

watch(
  () => route.params.cocktailCode,
  async () => {
    if (!cocktailsMap[cocktailCode.value]) {
      await getCocktail(cocktailCode.value);
    }

    if (!cocktailsCodes.includes(cocktailCode.value) || !cocktailsMap[cocktailCode.value]?.length) {
      router.push({ name: 'NotFound' });
    }
  },
  { immediate: true },
);
</script>
