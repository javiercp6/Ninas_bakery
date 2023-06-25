<template>
  <section class="px-6 py-4 mx-auto flex justify-center">
    <div class="container w-full">
      <div class="flex flex-row flex-wrap">
        <div class="flex-auto basis-full md:basis-auto py-2">
          <div
            class="group relative rounded-md dark:bg-slate-700 dark:highlight-white/10 dark:focus-within:bg-transparent flex-auto"
          >
            <svg
              width="20"
              height="20"
              fill="currentColor"
              class="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-primary-light dark:text-slate-500"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              /></svg
            ><input
              type="text"
              aria-label="Filter products"
              placeholder="Filter products..."
              v-model="search"
              class="appearance-none w-full text-sm leading-6 bg-transparent text-slate-900 placeholder:text-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-light dark:text-slate-100 dark:placeholder:text-slate-500 dark:ring-0 dark:focus:ring-2"
            />
          </div>
        </div>
      </div>
      <div class="flex gap-4 p-4 w-full snap-x overflow-x-auto whitespace-nowrap">
        <NuxtLink
          v-for="category in categoriesSelected"
          class="snap-center shrink-0 rounded overflow-hidden"
          :to="{ path: '/products', query: { category: category } }"
        >
          <div>
            <WidgetsSelectCategory
              :class="
                selectCategory === category
                  ? 'text-primary-light dark:text-primary-light'
                  : ''
              "
              :title="category"
            />
          </div>
        </NuxtLink>
      </div>
      <WidgetsSkeletonProducts v-if="productsQuery.isLoading.value" />
      <div
        class="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center py-10"
      >
        <div v-for="product in productsFilter" :key="product._id" class="w-full">
          <WidgetsCardProduct :product="product" />
        </div>
      </div>
      <div v-if="productsQuery.isError.value">Error{{ productsQuery.error }}</div>
    </div>
  </section>
</template>

<script setup lang="ts">
useHead({
  title: "Products",
});
const route = useRoute();
const { productsQuery, search } = useProducts();
const { categoriesSelected } = useCategories();

const selectCategory = computed(() =>
  route.query.category ? route.query.category : "All"
);

const productsFilter = computed(() => {
  return productsQuery.data.value?.filter(
    (e) =>
      e.name.toLowerCase().includes(search.value.toLowerCase()) &&
      (selectCategory.value === "All" || e.category === selectCategory.value)
  );
});

// const { data: products, pending, error } = await useFetch<Product[]>(/* 'https://apininas.vercel.app/api/login' */'https://apininas.vercel.app/api/products' /* '/api/hello' */)
</script>
