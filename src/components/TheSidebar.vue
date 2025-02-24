<template>
  <div class="flex flex-col bg-stone-300 h-full">
    <RouterLink
      v-for="cocktailCode in cocktailsCodes"
      :to="`/c/${cocktailCode}`"
      activeClass="bg-stone-500 text-white"
      class="p-3 transition-colors text-stone-800 uppercase"
      :key="cocktailCode"
    >
      {{ cocktailCode }}
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { useCocktailsStore } from '@/stores/cocktailsStore.ts';
import { storeToRefs } from 'pinia';

const cocktailsStore = useCocktailsStore();

const { cocktailsCodes } = storeToRefs(cocktailsStore);
</script>
