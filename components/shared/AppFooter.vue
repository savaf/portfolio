<script setup lang="ts">
const { links: socialLinks } = await queryContent("social_links").findOne();
</script>

<template>
  <footer class="bg-primary-dark">
    <div class="container mx-auto">
      <div class="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-secondary-dark">
        <!-- Footer social links -->
        <div class="flex flex-col justify-center items-center mb-12 sm:mb-20">
          <p class="font-general-semibold text-3xl sm:text-4xl text-primary-light mb-5">Follow me</p>
          <ul class="flex gap-4 sm:gap-8">
            <NuxtLink v-for="social in socialLinks" :key="social.id" :href="social.url" target="__blank" class="text-gray-400 hover:text-indigo-400 cursor-pointer rounded-lg bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-500">
              <span class="sr-only">{{ social.name }}</span>
              <Icon :name="social.icon" class="w-6 sm:w-8 h-6 sm:h-8" aria-hidden="true" />
            </NuxtLink>
          </ul>
        </div>

        <!-- Footer copyright -->
        <SharedFooterCopyright />
      </div>
    </div>
  </footer>
</template>
