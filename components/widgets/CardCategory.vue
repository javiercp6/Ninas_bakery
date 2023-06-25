<template>
  <NuxtLink
    :to="{ path: '/products', query: { category: props.category.name } }"
    class="transition-all duration-500 hover:scale-105 group relative"
  >
    <img
      class="object-cover object-top w-full rounded-lg shadow-md shadow-gray-200 dark:shadow-gray-700 h-60 xl:h-96"
      :src="props.category.picture"
      alt="Product Image"
    />
    <div
      class="absolute inset-0 bg-black bg-opacity-25 rounded-lg transition ease-out group-hover:bg-opacity-0"
    />
    <div class="p-4 flex items-center justify-center absolute inset-0">
      <div
        class="py-3 px-4 bg-white bg-opacity-95 rounded-3xl text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-primary-light"
      >
        {{ props.category.name }}
      </div>
    </div>
  </NuxtLink>
</template>
<script setup lang="ts">
import type { Category } from "../../types/ProductsInterface";

const props = defineProps<{ category: Category }>();
</script>
