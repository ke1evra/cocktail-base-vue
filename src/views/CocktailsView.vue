<template>
  <div class="flex bg-stone-400 justify-between h-screen">
    <div class="flex flex-grow max-w-[1024px] min-w-[360px] mx-auto bg-stone-200 shadow-2xl">
      <div class="sm:min-w-64">
        <TheSidebar />
      </div>
      <div class="flex-grow overflow-y-auto">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheSidebar from '@/components/TheSidebar.vue';
</script>
