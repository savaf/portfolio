<script setup lang="ts">
import { useHead, ref, clearError } from "#imports";

const props = defineProps<{
  error: Error & { statusCode?: number; statusMessage?: string };
}>();

const statusCode = ref(props.error.statusCode || 404);
const statusMessage = ref(props.error.statusMessage || "Unknown error");
const message = ref(props.error.message || "Sorry, there was an error. Please try again later.");
// const stack = ref(props.error.stack || "");

// Head
useHead({
  title: `${statusCode.value}: ${statusMessage.value}`,
  htmlAttrs: {
    lang: "en",
    class: "h-full",
  },
});

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <div class="flex flex-col items-center justify-center w-screen h-screen bg-gradient-to-r from-primary-dark to-ternary-dark">
    <div class="px-40 py-20 bg-secondary-dark rounded-md shadow-xl max-w-screen-lg">
      <div class="flex flex-col items-center">
        <h1 class="font-bold text-ternary-light text-9xl">{{ statusCode }}</h1>

        <template v-if="statusCode === 404">
          <h2 class="mb-2 text-2xl font-bold text-center text-ternary-light md:text-3xl"><span class="text-accent">Oops!</span> Page not found</h2>

          <p class="mb-8 text-center text-ternary-light md:text-lg">The page you’re looking for doesn’t exist.</p>
        </template>
        <template v-else>
          <h2 class="mb-2 text-2xl font-bold text-center text-ternary-light md:text-3xl"><span class="text-accent">Oops!</span> {{ statusMessage }}</h2>

          <p class="mb-8 text-center text-ternary-light md:text-lg">
            {{ message }}
          </p>
        </template>

        <SharedButton as="a" href="/" label="Go home" @click="handleError" />
        <!-- <NuxtLink to="/" class="btn btn-primary" @click="handleError"> Go home </NuxtLink> -->

        <!-- <DevOnly>
          <div v-if="stack" class="mockup-code mt-8 w-full">
            <pre><code v-html="stack"></code></pre>
          </div>
        </DevOnly> -->
      </div>
    </div>
  </div>
</template>
