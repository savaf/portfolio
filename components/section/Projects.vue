<template>
  <div class="bg-primary-dark pb-8">
    <section class="container mx-auto max-w-7xl">
      <ProjectsGrid />

      <!-- View more projects button -->
      <div class="mt-5 sm:mt-14 flex justify-center">
        <NuxtLink to="/projects" class="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300" aria-label="More Projects"> More Projects </NuxtLink>
      </div>
    </section>
  </div>
</template>
