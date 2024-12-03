<script lang="ts" setup>
const jobList = ref([])
const { data } = await useAsyncData('experiences', fetchProjects())
console.log(data)

function fetchProjects() {
  return queryContent('experiences')
    .sort({
      position: 1,
    })
    .find()
}
</script>

<template>
  <div class="relative w-full">
    <section class="relative overflow-hidden h-[192px] snap-y snap-proximity">
      hola
    </section>
  </div>
</template>
