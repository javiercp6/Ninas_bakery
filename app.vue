<template>
  <NuxtLayout>
    <NuxtPage class="dark:bg-gray-900" style="min-height: calc(100vh - 72px)" />
  </NuxtLayout>
</template>
<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Nina´s Bakery` : "Nina´s Bakery";
  },
});
</script>
