<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{
  error: NuxtError
}>()

const handleError = () => clearError({ redirect: '/' })

definePageMeta({
  layout: 'slim',
})
</script>

<template>
  <main class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div class="text-center">
      <p class="text-base font-semibold text-primary">
        {{ error.statusCode }}
      </p>

      <template v-if="error.statusCode === 404">
        <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Page not found
        </h1>
        <p class="mt-6 text-base leading-7 text-gray-600">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
      </template>
      <template v-else>
        <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Oops! An error occurred
        </h1>
        <p class="mt-6 text-base leading-7 text-gray-600">
          {{ error.message }}
        </p>
      </template>

      <div class="mt-10 flex items-center justify-center gap-x-6">
        <Button @click="handleError">
          Go back home
        </Button>
      </div>

      <DevOnly>
        <div class="w-full my-8">
          <code>
            {{ error.stack }}
          </code>
        </div>
      </DevOnly>
    </div>
  </main>
</template>
