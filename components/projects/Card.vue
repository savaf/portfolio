<script setup lang="ts">
const { project, as = "div" } = defineProps<{
  project: {
    title: string;
    category: string;
    img: string;
    slug: string;
  };
  as?: string;
}>();
</script>

<template>
  <component :is="as" class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-ternary-dark" aria-label="Single Project">
    <NuxtLink :to="`/projects/${project.slug}`">
      <div>
        <NuxtPicture
          :src="project.img"
          :alt="project.title"
          format="webp"
          legacy-format="jpg"
          width="393px"
          height="192px"
          sizes="393px sm:332px md:393px"
          loading="lazy"
          :img-attrs="{
            class: 'w-full h-48 sm:h-56 object-cover object-center rounded-t-xl',
          }"
        />
      </div>
      <div class="text-center px-4 py-6">
        <p class="font-general-semibold text-xl text-ternary-light font-semibold mb-2">
          {{ project.title }}
        </p>
        <span class="font-general-medium text-lg text-ternary-light">{{ project.category }}</span>
      </div>
    </NuxtLink>
  </component>
</template>
