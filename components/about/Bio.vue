<script setup lang="ts">
const { data } = await useAsyncData("page-data", () => queryContent("/bio").findOne());
const { data: socialLinks } = await useAsyncData("social_links", () => {
  return queryContent("social_links").findOne();
});
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
        <ContentRendererMarkdown :value="data" />
      </div>
    </div>
    <div class="lg:pl-20">
      <ul role="list" class="space-y-4">
        <li v-for="social in socialLinks.links" :key="social.id" class="flex">
          <NuxtLink :href="social.url" target="_blank" class="group flex text-sm font-medium text-zinc-200 hover:text-teal-500">
            <Icon :name="social.icon" class="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
            <span class="ml-4">{{ social.name }}</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>
