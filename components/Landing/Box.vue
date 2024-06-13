<script setup lang="ts">
defineProps<{
  title?: string
  icon?: {
    name: string
    class: string
  }
}>()
</script>

<template>
  <div class="box-gen hover:shadow-lg group relative flex flex-col items-start rounded-2xl p-4 shadow overflow-hidden sm:col-span-3 md:col-span-3 lg:col-span-2">
    <div v-if="title" class="body-primary box-gen line-clamp-2 inline-flex h-8 items-center gap-1 rounded-2xl px-4 text-sm leading-5 z-10 mb-0">
      <UIcon v-if="icon" :name="icon.name" class="w-4 h-4 flex-none" :class="icon.class" />
      <span>{{ title }}</span>
    </div>
    <div class="mx-auto" :class="[title ? 'mt-4' : '']">
      <slot />
    </div>
  </div>
</template>
