<script setup lang="ts">
import { Dialog, DialogPanel, TransitionRoot, TransitionChild } from "@headlessui/vue";

const { links: navigation } = await queryContent("navigation").findOne();

const mobileMenuOpen = ref(false);

function closeMobileMenu() {
  mobileMenuOpen.value = false;
}
</script>

<template>
  <div>
    <!-- Hack to be able to set the space occupied by the header -->
    <div class="w-full h-[104px]" />
    <header class="fixed w-full z-50 top-0 inset-x-0 bg-primary-dark">
      <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex flex-1">
          <div class="hidden lg:flex lg:gap-x-12">
            <NuxtLink v-for="item in navigation" :key="item.name" :to="item.href" class="text-sm font-semibold leading-6 text-white">
              {{ item.name }}
            </NuxtLink>
          </div>
          <div class="flex lg:hidden">
            <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white" @click="mobileMenuOpen = true">
              <span class="sr-only">Open main menu</span>
              <Icon name="i-heroicons-bars-3-solid" class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
        <NuxtLink href="/" class="-m-1.5 p-1.5">
          <SharedAppLogo class="h-14 lg:h-16 w-auto" />
        </NuxtLink>
        <div class="flex flex-1 justify-end">
          <SharedHeaderSocialLinks />
          <!-- <ThemeSwitcherButton class="ml-4 sm:ml-10" /> -->
        </div>
      </nav>
      <TransitionRoot appear :show="mobileMenuOpen" as="template">
        <Dialog as="div" class="lg:hidden" :open="mobileMenuOpen" @close="closeMobileMenu">
          <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
            <div class="fixed inset-0 bg-black/25 z-10" @click="closeMobileMenu" />
          </TransitionChild>
          <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 -translate-x-full" enter-to="opacity-100 translate-x-0" leave="duration-200 ease-in" leave-from="opacity-100 translate-x-0" leave-to="opacity-0 -translate-x-full">
            <DialogPanel class="fixed inset-y-0 left-0 z-10 w-full overflow-y-auto bg-primary-dark px-6 py-6">
              <div class="flex items-center justify-between">
                <div class="flex flex-1">
                  <button type="button" class="-m-2.5 rounded-md p-2.5 text-white" @click="closeMobileMenu">
                    <span class="sr-only">Close menu</span>
                    <Icon name="i-heroicons-x-mark" class="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <NuxtLink href="/" class="-m-1.5 p-1.5">
                  <SharedAppLogo class="h-14 lg:h-16 w-auto" />
                </NuxtLink>
                <div class="flex flex-1 justify-end">
                  <SharedHeaderSocialLinks />
                </div>
              </div>
              <div class="mt-6 space-y-2">
                <NuxtLink v-for="item in navigation" :key="item.name" :to="item.href" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-secondary-dark" @click="closeMobileMenu">
                  {{ item.name }}
                </NuxtLink>
              </div>
            </DialogPanel>
          </TransitionChild>
        </Dialog>
      </TransitionRoot>
    </header>
  </div>
</template>

<style>
.menu-enter-active {
  animation: coming 0.4s;
  animation-delay: 0.2s;
  opacity: 0;
}

.menu-leave-active {
  animation: going 0.4s;
}
</style>
