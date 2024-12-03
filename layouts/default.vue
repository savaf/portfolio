<template>
  <!-- Background Effects -->
  <div
    class="fixed inset-0 -z-10 h-full w-full blur-sm dark:blur-sm"
  >
    <img
      class="absolute inset-0 -z-10 h-full w-full object-cover hidden dark:block"
      src="/images/background_dark.jpg"
      alt=""
    >
    <img
      class="absolute inset-0 -z-10 h-full w-full object-cover block dark:hidden"
      src="/images/background_light.jpg"
      alt=""
    >
    <div class="absolute inset-x-0 top-10 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl" aria-hidden="true">
      <div class="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20" style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)" />
    </div>
  </div>
  <div class="relative min-h-dvh">
    <!-- Header -->
    <!-- <SiteHeader /> -->

    <div class="pt-16 sm:pt-32 pb-36">
      <slot />
    </div>

    <!-- Footer -->
    <!-- <SiteFooter /> -->
  </div>
</template>
