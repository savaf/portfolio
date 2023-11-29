<script setup lang="ts">
import socialLinks from "~/data/socialLinks";
</script>

<template>
  <main class="isolate w-full pt-28 bg-secondary-dark mt-16 sm:mt-32 pb-16 sm:pb-32">
    <div class="container">
      <div class="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div class="lg:pl-20">
          <div class="max-w-xs px-2.5 lg:max-w-none">
            <img src="/images/portrait.webp" alt="" :sizes="'(min-width: 1024px) 32rem, 20rem'" class="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800" />
          </div>
        </div>
        <div class="lg:order-first lg:row-span-2">
          <h1 class="text-4xl font-bold tracking-tight text-ternary-light sm:text-5xl">I’m Spencer Sharp. I live in New York City, where I design the future.</h1>
          <div class="mt-6 space-y-7 text-base text-ternary-light">
            <p>I’ve loved making things for as long as I can remember, and wrote my first program when I was 6 years old, just two weeks after my mom brought home the brand new Macintosh LC 550 that I taught myself to type on.</p>
            <p>The only thing I loved more than computers as a kid was space. When I was 8, I climbed the 40-foot oak tree at the back of our yard while wearing my older sister’s motorcycle helmet, counted down from three, and jumped — hoping the tree was tall enough that with just a bit of momentum I’d be able to get to orbit.</p>
            <p>I spent the next few summers indoors working on a rocket design, while I recovered from the multiple surgeries it took to fix my badly broken legs. It took nine iterations, but when I was 15 I sent my dad’s Blackberry into orbit and was able to transmit a photo back down to our family computer from space.</p>
            <p>Today, I’m the founder of Planetaria, where we’re working on civilian space suits and manned shuttle kits you can assemble at home so that the next generation of kids really can make it to orbit — from the comfort of their own backyards.</p>
          </div>
        </div>
        <div class="lg:pl-20">
          <ul role="list" class="space-y-4">
            <li class="flex" v-for="social in socialLinks" :key="social.id">
              <NuxtLink :href="social.url" target="_blank" class="group flex text-sm font-medium text-zinc-200 hover:text-teal-500">
                <Icon :name="social.icon" class="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
                <span class="ml-4">{{ social.name }}</span>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>
