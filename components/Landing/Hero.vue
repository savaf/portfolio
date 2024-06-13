<script setup lang="ts">
export interface HeroNavLink {
  to: string
  label: string
  class: string
  target?: string
  rel?: string
  role?: string
  icon: {
    name: string
    class: string
  }
}

const links: HeroNavLink[] = [
  {
    to: '/contact',
    label: 'Contact me',
    class: '',
    icon: {
      name: 'i-lucide-mail',
      class: '',
    }
  },
  {
    to: 'https://www.linkedin.com/in/sinver-aguilo',
    label: 'LinkedIn',
    class: '',
    target: '_blank',
    rel: 'noopener noreferrer',
    role: 'link',
    icon: {
      name: 'i-simple-icons-linkedin',
      class: '',
    }
  },

]
</script>

<template>
  <section class="max-w-xl">
    <div class="flex gap-4 mb-4">
      <img class="rounded-full shadow-lg size-16" src="/images/portrait.jpg" alt="Miguel Ángel">
      <a href="https://linkedin.com/in/midudev" target="_blank" rel="noopener" class="flex items-center transition md:justify-center md:hover:scale-105"> <div class="flex items-center ">
        <span class="relative inline-flex overflow-hidden rounded-full p-[1px]">
          <span class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]" />
          <div class="inline-flex items-center justify-center w-full px-3 py-1 text-sm text-green-800 bg-green-100 rounded-full cursor-pointer dark:bg-gray-800 dark:text-white/80 backdrop-blur-3xl whitespace-nowrap">
            Disponible para trabajar
          </div>
        </span>
      </div>
      </a>
    </div>
    <h1 class="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl dark:text-white">
      Hi, I'm Sinver Aguilo
    </h1>
    <p class="mt-6 text-xl text-gray-800 dark:[&>strong]:text-primary-600 [&>strong]:text-primary-900 [&>strong]:font-semibold dark:text-gray-300">
      Im over +7 years of experience <strong>Software Developer</strong> from Santo Domingo, Republica Dominicana <UIcon name="i-cif-do" class="w-4 h-4" />. Especialiced developing enterprise-class web applications that scale to meet the demands of users.
    </p>
    <nav class="flex flex-wrap gap-4 mt-8">
      <NuxtLink
        v-for="link in links"
        :key="link.to"
        class="inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-800 transition bg-gray-100 border border-gray-300 rounded-full dark:bg-gray-800 dark:border-gray-600 dark:text-white focus-visible:ring-yellow-500/80 text-md hover:bg-gray-900 hover:border-gray-700 group max-w-fit hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"
        v-bind="link"
      >
        <UIcon :name="link.icon.name" class="w-4 h-4" :class="link.icon.class" />
        {{ link.label }}
      </NuxtLink>
    </nav>
  </section>
</template>
