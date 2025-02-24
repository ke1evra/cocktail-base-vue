<template>
  <div class="flex bg-stone-400 justify-between h-screen">
    <div class="flex flex-grow max-w-[1024px] min-w-[360px] mx-auto bg-stone-200 shadow-2xl">
      <div class="flex flex-col gap-3 p-3">
        <div class="text-3xl">404</div>
        <RouterLink :to="{ name: 'home' }" class="bg-stone-300 p-3">Home</RouterLink>
      </div>
    </div>
  </div>
</template>
