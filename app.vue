<script setup lang="ts">
// useHead({
//   htmlAttrs: { lang: 'en', class: 'h-full' },
//   bodyAttrs: { class: 'antialiased h-full bg-gray-200 dark:bg-gray-950' },
//   meta: [
//     { charset: 'utf-8' },
//     { name: 'viewport', content: 'width=device-width, initial-scale=1' },
//     { name: 'format-detection', content: 'telephone=no' },
//   ],
//   link: [
//     {
//       rel: 'icon',
//       type: 'image/svg+xml',
//       href: '/logo.svg',
//     }
//   ],
// })

// useSeoMeta({
//   ogImage: 'https://landing-template.nuxt.dev/social-card.png',
//   twitterImage: 'https://landing-template.nuxt.dev/social-card.png',
//   twitterCard: 'summary_large_image'
// })

// const route = useRoute()

// Use SSR-safe IDs for Headless UI
// provideHeadlessUseId(() => useId())
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <!-- <UNotifications /> -->
</template>
