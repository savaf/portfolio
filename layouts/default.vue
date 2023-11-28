<script setup lang="ts">
// const colorMode = useColorMode();

// watch(colorMode, (newVal) => {
//   console.log(newVal);
// });
// const backgroundUrl = computed(() => {
//   return colorMode.value === "dark" ? "/images/background_dark.jpg" : "/images/background_light.jpg";
// });
</script>

<template>
  <div class="bg-secondary-light dark:bg-primary-dark min-h-screen flex flex-col backdrop-blur-md">
    <NuxtPicture
      src="/images/background_dark.jpg"
      width="1097"
      height="845"
      sizes="sm:100vw"
      alt=""
      class="absolute inset-0 -z-10 h-full w-full"
      :img-attrs="{
        class: 'absolute h-full w-full object-cover object-right md:object-center saturate-50',
      }"
    />

    <SharedAppHeader />

    <!-- Render contents with transition -->
    <transition name="fade" mode="out-in">
      <slot />
    </transition>

    <SharedAppFooter />

    <!-- Go back to top when scrolled down -->
    <div class="flex space-x-2 mr-8 mb-6 right-0 bottom-0 z-50 fixed items-center sm:space-x-4">
      <BackToTop />
    </div>
  </div>
</template>
