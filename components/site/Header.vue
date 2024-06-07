<script setup lang="ts">
const navigation = computed(() => ([
  {
    class: 'dark:hidden block',
    name: 'Home',
    href: '/',
    image: {
      src: '/images/logo_dark.png',
    },
    // icon: 'i-line-md-home-twotone'
  },
  {
    class: 'hidden dark:block',
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
]))

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
    const scale = 1 - distance / 400
    const translation = 10 - distance / 20
    const expansion = 1 + scale

    $anime({
      targets: item,
      translateY: -translation,
      scale: 1 + scale,
      width: 40 * expansion,
    })
  })
}

function initialDockState() {
  const items = dockElement.value?.querySelectorAll('.dock-item') as NodeListOf<HTMLElement>
  items.forEach((item) => {
    $anime({
      targets: item,
      scale: 1,
      width: 40,
      translateY: 0,
    })
  })
}

const colorMode = useColorMode()
const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>

<template>
  <header class="fixed inset-x-0 bottom-3 z-50 hidden lg:block">
    <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div
        ref="dockElement"
        class="box-gen group flex mx-auto h-16 items-end gap-4 rounded-2xl px-4 pb-2.5 outline-0 ring-1 ring-zinc-200 dark:ring-[#1a1a1a]"
        @mouseover="onMouseOverDock"
        @mouseleave="initialDockState"
        @click="initialDockState"
      >
        <SiteNavButton
          v-for="item in navigation"
          :key="item.name"
          :item="item"
          class="ease-in dock-item"
          :class="[item.class]"
        />
        <hr class="lg:block mt-2.5 h-10 w-[1px] border-none bg-neutral-300 dark:bg-neutral-700">
        <!-- <SiteNavButton
          :item="{ name: 'Menu', icon: 'i-line-md-menu' }"
          class="ease-in dock-item"
        /> -->
        <SiteNavButton
          :item="{
            name: 'Switch to light theme',
            icon: isDark ? 'i-line-md-moon-rising-twotone-alt-loop' : 'i-line-md-sun-rising-twotone-loop',
          }"
          class="ease-in dock-item"
          @click="isDark = !isDark"
        />
      </div>
    </nav>
  </header>
  <div class="fixed z-10 flex flex-col w-full bottom-8 lg:hidden">
    <div class="h-16">
      <div class="sm:px-8 w-full">
        <div class="mx-auto max-w-7xl lg:px-8">
          <div class="relative px-4 sm:px-8 lg:px-12">
            <div class="max-w-full mx-auto">
              <div class="relative flex gap-4">
                <div class="flex justify-end flex-1 md:justify-center">
                  <div class="pointer-events-auto">
                    <SiteNavButton
                      :item="{
                        name: 'Menu',
                        icon: 'i-line-md-menu',
                      }"
                      class="ease-in dock-item"
                    />
                  </div>
                  <div class="ml-2">
                    <SiteNavButton
                      :item="{
                        name: 'Switch to light theme',
                        icon: isDark ? 'i-line-md-moon-rising-twotone-alt-loop' : 'i-line-md-sun-rising-twotone-loop',
                      }"
                      class="ease-in dock-item"
                      @click="isDark = !isDark"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="fixed inset-x-0 bottom-0 isolate -z-10 h-[100px]">
    <div class="gradient-mask-t-0 absolute inset-0 backdrop-blur-[1px]" />
    <div class="gradient-mask-t-0 absolute inset-0 backdrop-blur-[2px]" />
    <div class="gradient-mask-t-0 absolute inset-0 backdrop-blur-[3px]" />
    <div class="gradient-mask-t-0 absolute inset-0 backdrop-blur-[6px]" />
    <div class="gradient-mask-t-0 absolute inset-0 backdrop-blur-[12px]" />
  </div>
  <div class="" />
</template>

<style lang="css">
.box-gen {
  @apply border border-white bg-opacity-70 border-white
  bg-gray-50 outline outline-1 outline-gray-200 bg-blend-luminosity
   backdrop-blur-[24px] dark:border-black/10 dark:outline-[#1a1a1a] dark:bg-zinc-900/20
  ;
  /* bg-blend-luminosity outline-solid outline border-gray-200
  backdrop-filter backdrop-blur-24 backdrop-brightness-100 backdrop-contrast-100
  backdrop-grayscale-0 backdrop-hue-rotate-0 backdrop-invert-0
  backdrop-opacity-100
  backdrop-saturate-100 backdrop-sepia-0
  dark:border-gray-10 dark:bg-opacity-20 dark:bg-gray-98 dark:outline-gray-100 */

  /* @dark-mode { */
  /* border-color: hsla(0,0%,100%,.1);
  background-color: rgba(24,24,27,.2);
  outline-color: #1a1a1a; */
  /* } */
}

.gradient-mask-t-0 {
  -webkit-mask-image: linear-gradient(0deg,#000 0,transparent);
  mask-image: linear-gradient(0deg,#000 0,transparent);
}
</style>
