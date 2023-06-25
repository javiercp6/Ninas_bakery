<template>
  <NuxtLink
    :to="'/products/' + props.product._id"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
    class="max-w-4xl mx-auto grid grid-cols-1 ransition-all duration-500 hover:scale-105 cursor-pointer"
  >
    <div
      class="relative p-3 col-start-1 row-start-1 flex flex-col-reverse justify-between rounded-lg bg-gradient-to-t from-white/90 via-white/0 dark:bg-gradient-to-t dark:from-black/75 dark:via-black/0"
    >
      <div>
        <p
          class="text-sm leading-4 font-medium text-gray-900 dark:text-white transition-colors duration-300 transform"
          :class="isHover ? 'text-primary-light dark:text-primary-light' : ''"
        >
          {{ props.product.category }}
        </p>
        <h1
          class="mt-1 text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300 transform"
          :class="isHover ? 'text-primary-light dark:text-primary-light' : ''"
        >
          {{ props.product.name }}
        </h1>
      </div>
      <div class="flex justify-end">
        <span
          class="block bg-white bg-opacity-70 dark:bg-black dark:bg-opacity-50 rounded-full text-gray-800 dark:text-white text-xs font-bold px-3 py-2 leading-none"
          >${{ props.product.price }}</span
        >
      </div>
    </div>
    <div class="grid gap-4 col-start-1 col-end-3 row-start-1">
      <!-- <img
        :src="props.product.picture"
        alt=""
        class="w-full h-60 object-cover rounded-lg"
      /> -->
      <nuxt-img
        :src="props.product.picture"
        loading="lazy"
        class="w-full h-60 object-cover rounded-lg"
      />
    </div>
  </NuxtLink>
</template>
<script setup lang="ts">
import type { Product } from "../../types/ProductsInterface";

const props = defineProps<{ product: Product }>();
const isHover = ref(false);
</script>
