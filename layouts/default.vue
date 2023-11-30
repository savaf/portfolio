<template>
  <div class="bg-primary-dark min-h-screen flex flex-col backdrop-blur-md">
    <SharedAppHeader />
    <slot />

    <LazySharedAppFooter />

    <!-- Go back to top when scrolled down -->
    <div class="flex space-x-2 mr-8 mb-6 right-0 bottom-0 z-50 fixed items-center sm:space-x-4">
      <LazyBackToTop />
    </div>
  </div>
</template>
