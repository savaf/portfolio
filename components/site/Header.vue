<script setup lang="ts">
import { ref } from 'vue'
import { Dialog, DialogPanel, } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  {
    name: 'Home',
    href: '/',
    image: {
      src: '/images/logo.png',
    },
    // icon: 'i-line-md-home-twotone'
  },
  { name: 'About me', href: '/about', icon: 'i-line-md-person-twotone' },
  { name: 'Experience', href: '/experience', icon: 'i-line-md-briefcase-twotone' },
  { name: 'Projects', href: '/projects', icon: 'i-lucide-code' },
  { name: 'Contact', href: '/contact', icon: 'i-line-md-email-twotone-alt' },
]

const mobileMenuOpen = ref(false)

// Dock animation
const { $anime } = useNuxtApp()
const dockElement = ref<HtmlElement | null>(null)

function getDistance(v1, v2) {
  return Math.sqrt((v1.x - v2.x) ** 2 + (v1.y - v2.y) ** 2)
}

function onMouseOverDock(event: MouseEvent) {
  const items = dockElement.value?.querySelectorAll('.dock-item') as NodeListOf<HTMLElement>

  const mousePosition = {
    x: event.clientX,
    y: event.clientY
  }

  items.forEach((item) => {
    const rect = item.getBoundingClientRect()
    const itemPosition = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2
    }

    const distance = getDistance(mousePosition, itemPosition)
    const scale = 1 - distance / 200
    const translation = 10 - distance / 20
    const expansion = 1 + scale

    $anime({
      targets: item,
      translateY: -translation,
      scale: 1 + scale,
      width: 40 * expansion,
      easing: 'easeInOutSine',
      delay: 0,
    })
  })
}

function onMouseLeaveDock() {
  // const items = dockElement.value?.querySelectorAll('.dock-item') as NodeListOf<HTMLElement>
  // items.forEach((item) => {
  //   $anime({
  //     targets: item,
  //     scale: 1,
  //     width: 40,
  //     translateY: 0,
  //     easing: 'easeInOutSine',
  //     delay: 0,
  //     duration: 10,
  //   })
  // })
}
</script>

<template>
  <div class="fixed bottom-8 left-1/2 z-10 -translate-x-1/2 flex-col hidden pointer-events-auto md:flex">
    <div class="box-gen mx-auto flex h-16 items-end gap-4 rounded-2xl px-4 pb-2.5 outline-0 ring-1 ring-zinc-200 dark:ring-[#1a1a1a]">
      <button data-state="closed" class="relative">
        <a rel="" aria-label="Inicio" href="/">
          <div
            class="z-30 flex items-center justify-center w-10 rounded-full box-gen aspect-square bg-neutral-200/70 dark:bg-neutral-900/70 " style="width: 40px;"
          >
            <div class="group">
              <img
                alt="avatar Eduardo Calvo López" fetchpriority="high" width="256" height="256" decoding="async" data-nimg="1" class="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 w-full group-hover:hidden"
                style="color: transparent;" srcset="https://educalvolopez.com/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.2f1882fe.jpg&amp;w=256&amp;q=75 1x, https://educalvolopez.com/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.2f1882fe.jpg&amp;w=640&amp;q=75 2x" src="https://educalvolopez.com/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.2f1882fe.jpg&amp;w=640&amp;q=75"
              >
              <img
                alt="avatar Eduardo Calvo López" fetchpriority="high" width="256" height="256" decoding="async" data-nimg="1"
                class="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 w-full hidden group-hover:flex"
                style="color: transparent;"
                srcset="https://educalvolopez.com/image?url=%2F_next%2Fstatic%2Fmedia%2Favatarhover.e041edd5.jpg&amp;w=256&amp;q=75 1x, https://educalvolopez.com/image?url=%2F_next%2Fstatic%2Fmedia%2Favatarhover.e041edd5.jpg&amp;w=640&amp;q=75 2x" src="https://educalvolopez.com/image?url=%2F_next%2Fstatic%2Fmedia%2Favatarhover.e041edd5.jpg&amp;w=640&amp;q=75"
              >
            </div>
          </div>
        </a>
      </button>
      <button data-state="closed" class="relative">
        <a rel="" aria-label="About" href="/about">
          <div class="z-30 flex items-center justify-center w-10 rounded-full box-gen aspect-square bg-neutral-200/70 dark:bg-neutral-900/70 " style="width: 40px;">
            <svg
              xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-user w-6/12 transition fill-white stroke-neutral-900 dark:fill-neutral-600 dark:stroke-neutral-300"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
        </a>
      </button>

      <button data-state="closed" class="relative">
        <a rel="" aria-label="Blog" href="/blog">
          <div class="z-30 flex items-center justify-center w-10 rounded-full box-gen aspect-square bg-neutral-200/70 dark:bg-neutral-900/70 " style="width: 40px;">
            <svg
              xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-book-open w-6/12 transition fill-white stroke-neutral-900 dark:fill-neutral-600 dark:stroke-neutral-300"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
          </div>
        </a>
      </button>
      <button data-state="closed" class="relative">
        <a rel="" aria-label="Proyectos" href="/proyectos">
          <div
            class="z-30 flex items-center justify-center w-10 rounded-full box-gen aspect-square bg-neutral-200/70 dark:bg-neutral-900/70 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg" width="40"
              height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-code w-6/12 transition fill-white stroke-neutral-900 dark:fill-neutral-600 dark:stroke-neutral-300"
            >
              <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
            </svg>
          </div>
        </a>
      </button>
      <button data-state="closed" class="relative">
        <a rel="" aria-label="Stack" href="/stack">
          <div class="z-30 flex items-center justify-center w-10 rounded-full box-gen aspect-square bg-neutral-200/70 dark:bg-neutral-900/70 " style="width: 40px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layers w-6/12 transition fill-white stroke-neutral-900 dark:fill-neutral-600 dark:stroke-neutral-300">
              <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
              <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
              <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
            </svg>
          </div>
        </a>
        <div class="absolute -bottom-2 left-1/2 h-[0.3rem] w-[0.3rem] -translate-x-1/2 rounded-full bg-amber-600" />
      </button>
      <button data-state="closed" class="relative">
        <a rel="noopener noreferrer" target="_blank" aria-label="Tienda" href="https://educalvolopez.lemonsqueezy.com/"><div class="z-30 flex items-center justify-center w-10 rounded-full box-gen aspect-square bg-neutral-200/70 dark:bg-neutral-900/70 " style="width: 40px;"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart w-6/12 transition fill-white stroke-neutral-900 dark:fill-neutral-600 dark:stroke-neutral-300"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg></div></a>
      </button>
      <hr class=" mt-2.5 h-10 w-[1px] border-none bg-neutral-300 dark:bg-neutral-700">
      <button data-state="closed">
        <div class="z-30 flex items-center justify-center w-10 rounded-full cursor-pointer box-gen aspect-square bg-neutral-200/70 dark:bg-neutral-900/70" aria-label="Switch to light theme" style="width: 40px;">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun w-6/12 transition fill-white stroke-neutral-900 dark:hidden dark:fill-neutral-600 dark:stroke-neutral-300"><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon hidden w-6/12 transition fill-white stroke-neutral-900 dark:block dark:fill-neutral-600 dark:stroke-neutral-300"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg>
        </div>
      </button>
      <button data-state="closed">
        <div class="z-30 flex items-center justify-center w-10 rounded-full cursor-pointer box-gen aspect-square bg-neutral-200/70 dark:bg-neutral-900/70" style="width: 40px;">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-volume w-6/12 transition fill-white stroke-neutral-900 dark:fill-neutral-600 dark:stroke-neutral-300"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /></svg><div class="sr-only">
            Sin sonido
          </div>
        </div>
      </button>
    </div>
  </div>
  <header class="fixed z-10 flex flex-col w-full bottom-8 ">
    <div class="h-16">
      <div class="sm:px-8 w-full">
        <div class="mx-auto max-w-7xl lg:px-8">
          <div class="relative px-4 sm:px-8 lg:px-12">
            <div class="max-w-full mx-auto">
              <div class="relative flex gap-4">
                <div class="flex justify-end flex-1 md:justify-center">
                  <div class="pointer-events-auto">
                    <button id="radix-:R6kaja:" class="inline-flex px-3 py-3 transition rounded-full box-gen group text-neutral-700 dark:text-white md:px-2 md:py-2" type="button" aria-haspopup="menu" aria-expanded="false" data-state="closed">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu w-4 h-4 stroke-zinc-900 dark:stroke-white"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg><span class="sr-only">Menu móvil</span>
                    </button>
                  </div><div class="ml-2">
                    <button id="radix-:Rakaja:" class="inline-flex px-3 py-3 transition rounded-full box-gen group text-neutral-700 dark:text-white md:px-2 md:py-2" type="button" aria-haspopup="menu" aria-expanded="false" data-state="closed">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun w-4 h-4 stroke-zinc-900 dark:hidden"><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon hidden w-4 h-4 stroke-white dark:block"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg><span class="sr-only">Cambiar tema</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <header class="fixed inset-x-0 inset-y-1/2 z-50">
    <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="">
        </a>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400" @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div
        ref="dockElement"
        class="box-gen group flex mx-auto h-16 items-end gap-4 rounded-2xl px-4 pb-2.5 outline-0 ring-1 ring-zinc-200 dark:ring-[#1a1a1a]""
        @mouseover="onMouseOverDock"
        @mouseleave="onMouseLeaveDock"
      >
        <SiteNavButton
          v-for="item in navigation"
          :key="item.name"
          :item="item"
          class="ease-in dock-item"
        />
        <hr class=" mt-2.5 h-10 w-[1px] border-none bg-neutral-300 dark:bg-neutral-700">
        <SiteNavButton
          :item="{ name: 'Switch to light theme', icon: 'i-line-md-moon-rising-twotone-alt-loop' }"
          class="ease-in dock-item"
        />
        <SiteNavButton
          :item="{ name: 'Menu', icon: 'i-line-md-menu' }"
          class="ease-in dock-item"
        />
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="#" class="text-sm font-semibold leading-6 text-white">Log in <span aria-hidden="true">&rarr;</span></a>
      </div>
    </nav>
    <Dialog class="lg:hidden" :open="mobileMenuOpen" @close="mobileMenuOpen = false">
      <div class="fixed inset-0 z-50" />
      <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="">
          </a>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <a v-for="item in navigation" :key="item.name" :href="item.href" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{ item.name }}</a>
            </div>
            <div class="py-6">
              <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</a>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>

  <header class="absolute inset-x-0 top-0 z-50">
    <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="">
        </a>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400" @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <a v-for="item in navigation" :key="item.name" :href="item.href" class="text-sm font-semibold leading-6 text-white">{{ item.name }}</a>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="#" class="text-sm font-semibold leading-6 text-white">Log in <span aria-hidden="true">&rarr;</span></a>
      </div>
    </nav>
    <Dialog class="lg:hidden" :open="mobileMenuOpen" @close="mobileMenuOpen = false">
      <div class="fixed inset-0 z-50" />
      <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="">
          </a>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <a v-for="item in navigation" :key="item.name" :href="item.href" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{ item.name }}</a>
            </div>
            <div class="py-6">
              <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</a>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<style>
.box-gen {
    border-width: 1px;
    --tw-border-opacity: 1;
    border-color: rgb(255 255 255/var(--tw-border-opacity));
    background-color: hsla(0,0%,98%,.7);
    background-blend-mode: luminosity;
    outline-style: solid;
    outline-width: 1px;
    outline-offset: 0;
    outline-color: #e4e4e7;
    --tw-backdrop-blur: blur(24px);
    -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
    backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);

    /* @dark-mode { */
        border-color: hsla(0,0%,100%,.1);
        background-color: rgba(24,24,27,.2);
        outline-color: #1a1a1a;
    /* } */
  }
</style>
