<script setup lang="ts">
const jobExperiences = await queryContent("experiences").find();
</script>

<template>
  <section>
    <h2 class="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16 text-ternary-light">Experience</h2>

    <ol class="relative border-s border-primary-light text-ternary-light">
      <li class="mb-10 ms-6" v-for="experience in jobExperiences">
        <span class="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 ring-gray-900 bg-blue-900">
          <Icon name="i-heroicons-briefcase-solid" class="w-6 h-6" aria-hidden="true" />
        </span>
        <h3 class="flex items-center mb-1 text-lg font-semibold text-white">
          {{ experience.position }} &nbsp; <span class="text-indigo-600">@{{ experience.company }}</span>
        </h3>
        <span class="block mb-2 text-sm font-normal leading-none text-gray-500">
          <time>{{ experience.date }}</time> | {{ experience.location }}
        </span>
        <p v-for="p in experience.description" :key="p" class="mb-4 text-base font-normal text-ternary-light">
          {{ p }}
        </p>
      </li>
    </ol>
  </section>
</template>
