<script setup>
// import { MonitorIcon } from 'lucide-vue-next'
</script>

<template>
  <div class="flex w-full items-center justify-center relative">
    <div class="w-full">
      hola
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque odit harum ullam delectus autem voluptatum sit temporibus saepe optio facilis quod neque esse fugiat quas veritatis, consequatur sed laudantium quaerat?
    </div>
    <div
      class="absolute inset-0 bg-gradient-to-br from-pink-500/30 to-purple-500/30 rounded-xl transform rotate-[-4deg] translate-x-4 translate-y-4 backdrop-blur-sm"
    />
    <div
      class="absolute inset-0 bg-gray-800/50 rounded-xl transform rotate-[-2deg] translate-x-2 translate-y-2 backdrop-blur-sm"
    />
    <div class="absolute inset-0 bg-gray-900 rounded-xl shadow-2xl overflow-hidden" />
  </div>
</template>

<style scoped>
.backdrop-blur-sm {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}
</style>
