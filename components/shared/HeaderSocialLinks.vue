<script setup lang="ts">
import socialLinks from "~/data/socialLinks.js";
</script>

<template>
  <ul class="flex gap-4 sm:gap-8">
    <NuxtLink v-for="social in socialLinks" :key="social.id" :href="social.url" target="__blank" class="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg shadow-sm duration-500">
      <span class="sr-only">{{ social.name }}</span>
      <Icon :name="social.icon" class="w-6 h-6" aria-hidden="true" />
    </NuxtLink>
  </ul>
</template>
