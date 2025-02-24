<template>
  <div>
    <div v-for="cocktailCode in cocktailsCodes" :key="cocktailCode">{{ cocktailCode }}</div>
  </div>
</template>

<script setup lang="ts">
import { useCocktailsStore } from '@/stores/cocktailsStore.ts';
import { storeToRefs } from 'pinia';

const cocktailsStore = useCocktailsStore();

const { cocktailsCodes } = storeToRefs(cocktailsStore);
</script>
