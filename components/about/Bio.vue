<script setup lang="ts">
import socialLinks from "~/data/socialLinks";
</script>

<template>
  <section class="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
    <div class="lg:pl-20">
      <div class="max-w-xs px-2.5 lg:max-w-none">
        <NuxtPicture
          src="/images/portrait.jpg"
          format="webp,jpg"
          width="316"
          height="316"
          sizes="316px lg:433px"
          alt=""
          class="w-[316px] lg:w-[433px] bg-zinc-800"
          :img-attrs="{
            class: 'w-full aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover bg-zinc-800',
          }"
        />
      </div>
    </div>
    <div class="lg:order-first lg:row-span-2">
      <h1 class="text-4xl font-bold tracking-tight text-ternary-light sm:text-5xl">BIOGRAPHY</h1>
      <div class="mt-6 space-y-7 text-base text-ternary-light">
        <p>I’m Sinver Aguiló a web developer and UI/UX designer with a passion for creating beautiful, functional, and user-centered digital experiences. With 7+ years of experience in the field. I am always looking for new and innovative ways to bring my clients' visions to life.</p>
        <p>I believe that design is about more than just making things look pretty – it's about solving problems and creating intuitive, enjoyable experiences for users.</p>
        <p>Whether I'm working on a website, mobile app, or other digital product, I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.</p>
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
  </section>
</template>
