<script setup lang="ts">
// const colorMode = useColorMode();

// const backgroundUrl = computed(() => {
//   return colorMode.value === "dark" ? "/images/background_dark.jpg" : "/images/background.jpg";
// });
</script>

<template>
  <div class="relative isolate overflow-hidden pb-16 pt-14 sm:pb-20 w-full min-h-screen">
    <NuxtPicture
      src="/images/background_dark.jpg"
      format="webp,jpg"
      width="1097"
      height="845"
      sizes="sm:100vw"
      alt=""
      :placeholder="[50, 50, 10, 15]"
      class="absolute inset-0 -z-10 h-full w-full"
      :img-attrs="{
        class: 'absolute h-full w-full object-cover object-right md:object-center saturate-50',
      }"
    />

    <section class="container mx-auto flex flex-col sm:justify-between items-center sm:flex-row mt-12 sm:mt-10">
      <!-- Banner left contents -->
      <div class="w-full md:w-1/3 text-left">
        <h1 class="font-general-semibold text-3xl md:text-3xl xl:text-4xl text-center sm:text-left text-ternary-light uppercase">Hi, I'm Sinver Aguiló</h1>
        <p class="font-general-medium mt-2 text-lg sm:text-xl xl:text-2xl text-center sm:text-left leading-none text-gray-400 drop-shadow-lg">Turning Your Vision Into Reality With Code And Design.</p>
        <div class="flex justify-center sm:block">
          <a href="/Sinver-Aguilo-CV.pdf" download="" class="flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500" aria-label="Download Resume">
            <Icon name="i-heroicons-arrow-down-circle" class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100" aria-hidden="true" />
            <span class="text-sm sm:text-lg font-general-medium duration-100">Download CV</span>
          </a>
        </div>
      </div>

      <!-- Banner right illustration -->
      <div class="w-full md:w-2/3 text-right float-right">
        <img src="/images/developer-dark.svg" alt="Developer Dark" />

        <!-- <img v-if="colorMode.value == 'dark'" src="/images/developer-dark.svg" alt="Developer Dark" />
        <img v-else src="/images/developer.svg" alt="Developer Light" /> -->
      </div>
    </section>
  </div>
</template>
