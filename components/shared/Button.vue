<script setup lang="ts">
const { as = "button", label } = defineProps<{
  as?: string;
  label: string;
}>();
</script>
<template>
  <component :is="as" class="flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500" :aria-label="label">
    {{ label }}
    <slot />
  </component>
</template>
