<script setup lang="ts">
defineProps<{
  className: string
  icon: string
}>()
</script>

<template>
  <div
    class="inline-flex items-center h-8 gap-1 px-4 text-sm leading-5 body-primary box-gen rounded-2xl line-clamp-2"
    :class="[
      className,
    ]"
  >
    <template v-if="icon">
      <LazyIcon :name="icon" class="flex-none w-4 h-4" />
    </template>
    <span><slot /></span>
  </div>
</template>
