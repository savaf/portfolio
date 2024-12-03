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
const dockElement = ref<HTMLElement | null>(null)

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

// Dark mode
const colorMode = useColorMode()
const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})

// mobilePopover
const openMobilePopover = ref(false)
</script>

<template>
  <!-- Mobile navigation -->
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
  <!-- Mobile navigation -->
  <div class="fixed z-10 flex flex-col w-full bottom-8 lg:hidden">
    <div class="h-16">
      <div class="sm:px-8 w-full">
        <div class="mx-auto max-w-7xl lg:px-8">
          <div class="relative px-4 sm:px-8 lg:px-12">
            <div class="max-w-full mx-auto">
              <div class="relative flex gap-4">
                <div class="flex justify-end flex-1 md:justify-center" aria-label="Global Mobile">
                  <div class="pointer-events-auto">
                    <UPopover
                      v-model:open="openMobilePopover"
                      :popper="{
                        arrow: true,
                        placement: 'top',
                      }"
                      :ui="{
                        background: 'bg-red-500 dark:bg-gray-900',
                        ring: '',
                        base: 'box-gen',
                      }"
                    >
                      <SiteNavButton
                        :item="{
                          name: 'Menu',
                          icon: 'i-line-md-menu',
                        }"
                        class="ease-in dock-item "
                      />

                      <template #panel>
                        <div class="p-4">
                          <nav aria-label="Global Mobile">
                            <ul>
                              <li
                                v-for="item in navigation"
                                :key="item.href"
                              >
                                <NuxtLink
                                  :to="item.href"
                                  class="block py-2 px-3 text-sm/6 font-semibold dark:text-white/90 dark:hover:text-white"
                                  :class="item.class"
                                >
                                  {{ item.name }}
                                </NuxtLink>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </template>
                    </UPopover>
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

  <!-- Blur effect -->
  <div class="fixed inset-x-0 bottom-0 isolate -z-10 h-[100px]">
    <div class="gradient-mask-t-0 absolute inset-0 backdrop-blur-[1px]" />
    <div class="gradient-mask-t-0 absolute inset-0 backdrop-blur-[2px]" />
    <div class="gradient-mask-t-0 absolute inset-0 backdrop-blur-[3px]" />
    <div class="gradient-mask-t-0 absolute inset-0 backdrop-blur-[6px]" />
    <div class="gradient-mask-t-0 absolute inset-0 backdrop-blur-[12px]" />
  </div>
</template>

<style lang="css">
.gradient-mask-t-0 {
  -webkit-mask-image: linear-gradient(0deg,#000 0,transparent);
  mask-image: linear-gradient(0deg,#000 0,transparent);
}
</style>
