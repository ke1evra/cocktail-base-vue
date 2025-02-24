<template>
  <div>{{ route.params.cocktailCode }}</div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>
