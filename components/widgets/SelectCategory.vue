<template>
  <div
    class="text-gray-800 bg-gray-100 dark:bg-slate-700 dark:text-gray-200 hover:bg-gray-200 px-4 py-2 text-sm transition-colors duration-300 rounded-lg cursor-pointer"
  >
    {{ props.title }}
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ title: string }>();
</script>

<style scoped></style>
