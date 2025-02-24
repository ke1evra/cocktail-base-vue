<template>
  <div class="flex bg-blue-200 justify-between h-screen">
    <div class="border border-red-500 w-64">
      <TheSidebar />
    </div>
    <div class="border flex-grow"><RouterView /></div>
  </div>
</template>

<script setup lang="ts">
import TheSidebar from '@/components/TheSidebar.vue';
</script>
