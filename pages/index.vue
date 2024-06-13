<script setup lang="ts">

</script>

<template>
  <main>
    <Container class="px-4 sm:px-8 lg:px-12">
      <div class="mx-auto max-w-7xl lg:px-8">
        <LandingHero class="px-4 sm:px-8 lg:px-12" />
      </div>
    </Container>
    <Container class="sm:px-8 mt-24 md:mt-10">
      <div class="mx-auto max-w-7xl lg:px-8">
        <div class="relative px-4 sm:px-8 lg:px-12">
          <div class="max-w-full mx-auto">
            <div class="mb-2 grid grid-cols-6 grid-rows-6 gap-4 text-left lg:grid-rows-3">
              <LandingBox
                title="Experience"
                :icon="{
                  name: 'i-heroicons-envelope',
                }"
                class="col-span-6 lg:col-span-2 lg:row-span-3"
              >
                <p class="body-secondary my-2 text-sm">
                  Experiences
                </p>
              </LandingBox>
              <LandingBox
                title="Projects"
                :icon="{
                  name: 'i-heroicons-envelope',
                }"
                class="col-span-6 lg:col-span-2 lg:row-span-2"
              >
                <p class="body-secondary my-2 text-sm">
                  Projects
                </p>
              </LandingBox>
              <LandingBox
                title="About me"
                :icon="{
                  name: 'i-heroicons-envelope',
                }"
                class="col-span-6 lg:col-span-2 lg:row-span-1"
              >
                <p class="body-secondary my-2 text-sm">
                  About me
                </p>
              </LandingBox>
              <LandingBox
                class="col-span-6 lg:col-span-2 lg:row-span-1"
              >
                <NuxtImg class="w-full h-[120px] block dark:hidden" src="/images/developer.svg" alt="Developer" />
                <NuxtImg class="w-full h-[120px] hidden dark:block" src="/images/developer-dark.svg" alt="Developer" />
              </LandingBox>
              <LandingBox
                title="Stack"
                :icon="{
                  name: 'i-heroicons-envelope',
                }"
                class="col-span-6 lg:col-span-2 lg:row-span-1"
              >
                <p class="body-secondary my-2 text-sm">
                  Stack
                </p>
              </LandingBox>

              <LandingBox
                title="Contact"
                :icon="{
                  name: 'i-heroicons-envelope',
                }"
                class="col-span-6 lg:col-span-2 lg:row-span-1"
              >
                <p class="body-secondary my-2 text-sm">
                  Construyendo experiencias digitales excepcionales. ¡Hablemos de tu proyecto!
                </p>
                <div class="flex flex-row w-full gap-2 mt-6">
                  <a class="object-cover box-gen outline-0 ring-1 ring-zinc-200 dark:ring-[#1a1a1a] p-1 hover:bg-white dark:hover:bg-neutral-900/90 dark:hover:ring-neutral-800 inline-flex items-center gap-2 justify-center overflow-hidden rounded-md text-sm outline-offset-2 transition active:transition-none w-1/2" href="mailto:contacto@educalvolopez.com">Envíame un Email</a><a class="object-cover box-gen outline-0 ring-1 ring-zinc-200 dark:ring-[#1a1a1a] p-1 hover:bg-white dark:hover:bg-neutral-900/90 dark:hover:ring-neutral-800 inline-flex items-center gap-2 justify-center overflow-hidden rounded-md text-sm outline-offset-2 transition active:transition-none w-1/2" target="_blank" href="https://x.com/messages/compose?recipient_id=296227502">DM en Twitter</a>
                </div>
              </LandingBox>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </main>
</template>
