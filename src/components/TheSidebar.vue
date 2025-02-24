<template>
  <div class="flex flex-col p-3">
    <RouterLink v-for="cocktailCode in cocktailsCodes" :to="`/c/${cocktailCode}`" :key="cocktailCode">{{
      cocktailCode
    }}</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { useCocktailsStore } from '@/stores/cocktailsStore.ts';
import { storeToRefs } from 'pinia';

const cocktailsStore = useCocktailsStore();

const { cocktailsCodes } = storeToRefs(cocktailsStore);
</script>
