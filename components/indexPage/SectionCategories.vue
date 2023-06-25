<template>
  <section
    tabindex="-1"
    class="relative max-w-7xl mx-auto px-4 focus:outline-none sm:px-3 md:px-5"
  >
    <h2 class="sr-only">Testimonials</h2>
    <div
      :class="
        showAll
          ? 'grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-8 px-3 pb-5'
          : 'grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-8 px-3 pb-5 max-h-[33rem] overflow-hidden'
      "
    >
      <WidgetsCardCategory
        v-for="category in categoriesQuery.data.value"
        :key="category._id"
        :category="category"
        @click="selectCategory = category.name"
      />
    </div>
    <div
      v-if="!showAll"
      class="inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-white pb-8 pointer-events-none dark:from-slate-900 absolute"
      @click="toggleShowAll"
    >
      <!-- clase del div padre pt-32 -->
      <!-- <button
        type="button"
        class="relative bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 text-sm text-white font-semibold h-12 px-6 rounded-lg flex items-center dark:bg-slate-700 dark:hover:bg-slate-600 pointer-events-auto"
      >
        Show more...
      </button> -->
      <button
        class="mt-8 cursor-pointer animate-bounce relative flex items-center pointer-events-auto"
      >
        <svg
          width="53"
          height="53"
          viewBox="0 0 53 53"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="27"
            cy="26"
            r="18"
            :stroke="$colorMode.preference === 'light' ? 'black' : 'white'"
            stroke-width="2"
          ></circle>
          <path
            d="M22.41 23.2875L27 27.8675L31.59 23.2875L33 24.6975L27 30.6975L21 24.6975L22.41 23.2875Z"
            :fill="$colorMode.preference === 'light' ? 'black' : 'white'"
          ></path>
        </svg>
      </button>
    </div>
    <div
      v-if="showAll"
      class="inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-white pb-8 pointer-events-none dark:from-slate-900 absolute -mt-52 transition-opacity duration-300 opacity-100"
      @click="toggleShowAll"
    >
      <!-- <button
        type="button"
        class="relative bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 text-sm text-white font-semibold h-12 px-6 rounded-lg flex items-center dark:bg-slate-700 dark:hover:bg-slate-600 transition-transform pointer-events-auto"
      >
        Okay, I get the point
      </button> -->
      <button
        class="mt-8 cursor-pointer animate-bounce relative flex items-center pointer-events-auto text-slate-50"
      >
        <svg
          class="rotate-180"
          width="53"
          height="53"
          viewBox="0 0 53 53"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="27"
            cy="26"
            r="18"
            :stroke="$colorMode.preference === 'light' ? 'black' : 'white'"
            stroke-width="2"
          ></circle>
          <path
            d="M22.41 23.2875L27 27.8675L31.59 23.2875L33 24.6975L27 30.6975L21 24.6975L22.41 23.2875Z"
            :fill="$colorMode.preference === 'light' ? 'black' : 'white'"
          ></path>
        </svg>
      </button>
    </div>
    <!--  <div class="inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-white pt-32 pb-8 pointer-events-none dark:from-slate-900 absolute">
      <button type="button" class="relative bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 text-sm text-white font-semibold h-12 px-6 rounded-lg flex items-center dark:bg-slate-700 dark:hover:bg-slate-600 pointer-events-auto">
        Show more...
      </button>
    </div> -->
  </section>
</template>

<script setup tag="ts">
const { categoriesQuery } = useCategories();
const { selectCategory } = useProducts();
const showAll = ref(false);
const toggleShowAll = () => {
  showAll.value = !showAll.value;
};
</script>
