<template>
  <button
    class="px-2 py-1.5 sm:px-3 sm:py-2 shadow-sm rounded-xl cursor-pointer"
    @click="
      $colorMode.preference === 'light'
        ? ($colorMode.preference = 'dark')
        : ($colorMode.preference = 'light')
    "
  >
    <!-- Dark mode icon -->
    <svg
      v-if="$colorMode.preference === 'light'"
      xmlns="http://www.w3.org/2000/svg"
      class="text-liText-primary-dark hover:text-gray-400 dark:text-liText-ternary-light dark:hover:text-liBorder-primary-light w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
    <!-- Light mode icon -->
    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      class="text-gray-200 hover:text-gray-50 w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      />
    </svg>
  </button>
  <!--
    <Switch
      v-if="enabled !== null"
      v-model="enabled"
      :class="enabled ? 'bg-black' : 'bg-orange-50'"
      class="relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      @click="toggleTheme"
    >
      <span class="sr-only">Mode setting</span>
      <span
        aria-hidden="true"
        :class="enabled ? 'translate-x-9' : 'translate-x-0'"
        class="pointer-events-none inline-block transform shadow-lg ring-0 transition duration-200 ease-in-out"
      >
        <MoonIcon v-if="enabled" class="h-[34px] w-[34px] fill-gray-300" />
        <SunIcon v-else class="h-[34px] w-[34px] fill-yellow-500" />
      </span>
    </Switch> -->
</template>

<script setup lang="ts">
/* import { Switch } from '@headlessui/vue'
import { SunIcon, MoonIcon } from '@heroicons/vue/24/solid' */
/* useHead({
  script: [{
    children: `if (localStorage.theme === "dark" || (!('theme' in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
        document.documentElement.setAttribute("data-theme", "dark")
      } else {
        document.documentElement.removeAttribute("data-theme")
      }`
  }]
})
const { enabled, toggleTheme } = useTheme() */
</script>
