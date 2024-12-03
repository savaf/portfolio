<script setup lang="ts">
defineProps<{
  item: {
    name: string
    href: string
    image?: {
      src: string
      alt: string
    }
    icon?: string
  }
}>()
</script>

<template>
  <NuxtLink
    :key="item.name"
    :href="item.href"
    class="relative"
    :aria-label="item.name"
  >
    <UTooltip :text="item.name" :popper="{ arrow: true, placement: 'top' }">
      <div
        class="z-30 flex items-center justify-center w-10 h-10 rounded-full box-gen aspect-square bg-neutral-200/70 dark:bg-neutral-900/70 "
        style="width: 40px;"
      >
        <template v-if="item.image">
          <img
            :src="item.image.src"
            class="w-5/6"
            v-bind="item.image"
          >
        </template>
        <template v-else-if="item.icon">
          <UIcon
            :name="item.icon"
            class="w-4/6"
          />
        </template>
      </div>
      <div
        v-if="item.href === $route.path"
        class="absolute -bottom-2 left-1/2 h-[0.3rem] w-[0.3rem] -translate-x-1/2 rounded-full bg-amber-600"
      />
    </UTooltip>
  </NuxtLink>
</template>
