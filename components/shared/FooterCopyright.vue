<script setup lang="ts">
const copyrightDate = new Date().getFullYear();
</script>

<template>
  <div class="flex justify-center items-center text-center">
    <div class="font-general-regular text-lg text-ternary-dark dark:text-ternary-light">&copy; {{ copyrightDate }}</div>
  </div>
</template>
