<template>
  <main>
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold text-center">
        Page {{ $route.path }} :  {{ $route.params.slug }}
      </h1>
    </div>
  </main>
</template>
