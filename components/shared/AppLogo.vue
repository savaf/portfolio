<script setup lang="ts">
const appConfig = useAppConfig();

// not inherited from useAppConfig()
defineOptions({
  inheritAttrs: false,
});
</script>
<template>
  <span>
    <NuxtImg src="/images/logo.png" :alt="appConfig.title + ' Logo'" v-bind="$attrs" />
    <span class="sr-only">
      {{ appConfig.title }}
    </span>
  </span>
</template>
