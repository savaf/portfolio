<script setup lang="ts">
const appConfig = useAppConfig();

// not inherited from useAppConfig()
defineOptions({
  inheritAttrs: false,
});
</script>
<template>
  <span>
    <NuxtImg src="/images/logo.png" width="59px" height="auto" sizes="sm:59px, lg:68px" :alt="appConfig.title + ' Logo'" v-bind="$attrs" />
    <span class="sr-only">
      {{ appConfig.title }}
    </span>
  </span>
</template>
