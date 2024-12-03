<script setup lang="ts">
defineProps<{
  title?: string
  icon?: {
    name: string
    class?: string
  }
}>()
</script>

<template>
  <div v-if="title" class="body-primary box-gen line-clamp-2 inline-flex h-8 items-center gap-1 rounded-2xl px-4 text-sm leading-5 z-10 mb-0">
    <LazyUIcon v-if="icon" :name="icon.name" class="w-4 h-4 flex-none" :class="icon.class" />
    <span>{{ title }}</span>
  </div>
</template>
