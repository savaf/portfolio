<script setup lang="ts">
import socialLinks from "~/data/socialLinks";
</script>

<template>
  <main class="isolate w-full pt-28 bg-secondary-dark mt-16 sm:mt-32 pb-16 sm:pb-32">
    <div class="container mx-auto">
      <AboutBio />
    </div>
    <AboutCounter />
    <div class="container mx-auto mt-16 sm:mt-32">
      <AboutExperience />
    </div>
    <div class="container mx-auto mt-16 sm:mt-32">
      <AboutEducation />
    </div>
  </main>
</template>
