<script setup lang="ts">
const route = useRoute();
const relatedProjects = await queryContent("projects")
  .where({ $not: { slug: route.params.slug } })
  .limit(4)
  .find();
</script>

<template>
  <div class="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-secondary-dark">
    <p class="font-general-regular text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left">Related Projects</p>

    <div class="grid grid-cols-1 sm:grid-cols-4 gap-10">
      <ProjectsCard :project="item" v-for="item in relatedProjects" :key="item.slug" />
    </div>
  </div>
</template>
