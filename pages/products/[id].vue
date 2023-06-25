<template>
  <section class="text-gray-600 h-dp flex flex-col justify-center">
    <div v-if="!productQuery.isLoading.value" class="container px-5 mx-auto">
      <div class="xl:w-4/5 mx-auto flex flex-wrap">
        <img
          alt="ecommerce"
          class="lg:w-1/2 w-full lg:h-96 h-64 object-cover object-center rounded-lg"
          :src="productQuery.data.value?.picture"
        />
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <div>
            <h2
              class="text-sm title-font text-gray-500 dark:text-gray-200 tracking-widest"
            >
              {{ productQuery.data.value?.category }}
            </h2>
            <h1
              class="text-gray-900 dark:text-gray-200 text-3xl title-font font-medium mb-1"
            >
              {{ productQuery.data.value?.name }}
            </h1>
            <p class="leading-relaxed py-4 dark:text-gray-200">
              {{ productQuery.data.value?.description }}
            </p>
            <div class="flex">
              <span
                class="title-font font-medium text-2xl text-gray-900 dark:text-gray-200"
                >${{ productQuery.data.value?.price }}</span
              >
              <NuxtLink
                class="flex ml-auto"
                to="https://api.whatsapp.com/send?phone=+17862509297&text=Quiero comprar este producto"
                target="_blank"
              >
                <button
                  class="text-white bg-primary-light border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded-lg"
                >
                  Buy
                </button>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <WidgetsSkeletonDetailsProduct v-if="productQuery.isLoading.value" />
  </section>
</template>

<script setup lang="ts">
const route = useRoute();
const { productQuery } = useProducts(route.params.id as string);
useHead({
  title: productQuery.data.value?.name,
});
</script>
