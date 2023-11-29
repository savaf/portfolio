<template>
  <div class="bg-secondary-light dark:bg-primary-dark min-h-screen flex flex-col backdrop-blur-md">
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
