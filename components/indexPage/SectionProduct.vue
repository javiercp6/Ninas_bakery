<template>
  <section class="pb-4 lg:pb-8">
    <h3
      class="container px-6 pt-8 pb-4 mx-auto lg:pt-16 lg:pb-8 text-xl font-medium text-gray-800 md:text-2xl lg:text-3xl dark:text-gray-200"
    >
      Latest productos
    </h3>
    <div class="flex gap-4 p-4 w-full snap-x overflow-x-auto whitespace-nowrap">
      <WidgetsCardProduct
        v-for="product in productsQuery.data.value"
        class="snap-center shrink-0 rounded overflow-hidden"
        :product="product"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const { productsQuery } = useProducts();
</script>
