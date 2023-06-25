<template>
  <div class=" justify-center w-full animate-pulse">
    <div class="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
      <div v-for="n in 8" :key="n" class="w-full">
        <div class="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600" />

        <!-- <h1 class="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700" />
        <p class="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700" /> -->
      </div>
    </div>
  </div>
</template>
