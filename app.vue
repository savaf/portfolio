<script setup lang="ts">
const appConfig = useAppConfig()

useHead({
  htmlAttrs: {
    lang: appConfig.lang as string,
  },
  title: appConfig.title as string,
  titleTemplate: (title) =>
    title !== (appConfig.title as string)
      ? `${title} · ${appConfig.title}`
      : title,
})
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.layout-enter-active {
  animation: coming 0.4s;
  animation-delay: 0.2s;
  opacity: 0;
}

.page-leave-active,
.layout-leave-active {
  animation: going 0.4s;
}

@keyframes going {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

@keyframes coming {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
