<script setup lang="ts">
import { Dialog, DialogPanel } from "@headlessui/vue";
import navigation from "~/data/navigation.js";

const mobileMenuOpen = ref(false);
</script>

<template>
  <header class="bg-primary-light dark:bg-primary-dark">
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex flex-1">
        <div class="hidden lg:flex lg:gap-x-12">
          <a v-for="item in navigation" :key="item.name" :href="item.href" class="text-sm font-semibold leading-6 text-gray-900 dark:text-white">{{ item.name }}</a>
        </div>
        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-white" @click="mobileMenuOpen = true">
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
      </div>
    </nav>
    <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10" />
      <DialogPanel class="fixed inset-y-0 left-0 z-10 w-full overflow-y-auto bg-primary-light dark:bg-primary-dark px-6 py-6">
        <div class="flex items-center justify-between">
          <div class="flex flex-1">
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-white" @click="mobileMenuOpen = false">
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
          <a v-for="item in navigation" :key="item.name" :href="item.href" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-50">{{ item.name }}</a>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>
