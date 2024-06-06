<script setup lang="ts">
const dockElement = ref<HtmlElement | null>(null)
const items = [
  {
    name: 'Home',
    href: '/',
    icon: 'i-line-md-home-twotone'
  },
  { name: 'About me', href: '/about', icon: 'i-line-md-person-twotone' },
  { name: 'Experience', href: '/experience', icon: 'i-line-md-briefcase-twotone' },
  { name: 'Projects', href: '/projects', icon: 'i-lucide-code' },
  { name: 'Contact', href: '/contact', icon: 'i-line-md-email-twotone-alt' },
]

function getDistance(v1, v2) {
  return Math.sqrt((v1.x - v2.x) ** 2 + (v1.y - v2.y) ** 2)
}

function onMouseOverDock(e) {
  const items = document.querySelectorAll('.dock-item')
  const mousePosition = {
    x: e.clientX,
    y: e.clientY
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

    item.style.transform = `scale(${(1 + scale)}) translateY(-${translation}px)`
    item.style.width = `${expansion * 50}px`
  })
}

function onMouseLeaveDock() {
  const items = document.querySelectorAll('.dock-item')
  items.forEach((item) => {
    item.style.transform = 'scale(1)'
    item.style.width = '50px'
  })
}
</script>

<template>
  <div class="fixed inset-0 flex items-center justify-between bg-gray-500">
    <div
      ref="dock"
      class="box-gen flex mx-auto h-16 items-end gap-4 rounded-2xl px-4 pb-2.5 outline-0 ring-1 ring-zinc-200 dark:ring-[#1a1a1a]"
    >
      <SiteNavButton
        v-for="item in items"
        :key="item.name"
        :item="item"
        class="ease-in duration-300"
      />
    </div>
  </div>
</template>

<style>
    /* body {
        background-color: #333;
    } */

    .dock-bar {
        justify-content: space-around;
        border-radius: 10px;
        background-color: #333;
    }

    .dock-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #ffffff;
        text-decoration: none;
        margin: 10px;
    }
</style>
