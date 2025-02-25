<template>
  <div class="flex bg-stone-400 justify-between h-screen">
    <div class="flex flex-grow max-w-[1024px] min-w-[360px] mx-auto bg-stone-200 shadow-2xl">
      <div class="flex flex-col p-3 w-full items-center justify-center gap-3">
        <div class="text-7xl">404</div>

        <div>
          <img src="/404.webp" class="h-48" alt="I have no idea" />
        </div>

        <RouterLink :to="{ name: 'home' }" class="bg-stone-300 p-5">Go home</RouterLink>
      </div>
    </div>
  </div>
</template>
