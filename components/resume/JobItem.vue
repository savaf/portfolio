<script lang="ts" setup>
defineProps<{
  job: any
}>()
</script>

<template>
  <div class="relative flex items-center justify-center flex-none w-10 h-10 mt-1 rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
    <!-- <Image
      :src="job.logo"
      :alt="job.title"
      class="w-10 h-10"
      :priority="jobIndex <= 1"
    /> -->
  </div>
  <div class="flex flex-wrap flex-auto gap-x-2">
    <div class="sr-only">
      Empresa y Fecha
    </div>
    <div class="flex-none w-full text-sm font-medium body-primary">
      {{ job.company }} &nbsp; - &nbsp;
      <!-- <div
        class="inline text-xs body-secondary"
        aria-label="{`${role.start.label" ?? role.start} until ${
        role.end.label ?? role.end
        }`}
      >
        <time dateTime="{role.start.dateTime" ?? role.start}>
          {role.start.label ?? role.start}
        </time>{' '}
        <span aria-hidden="true">—</span>{' '}
        <time dateTime="{role.end.dateTime" ?? role.end}>
          {role.end.label ?? role.end}
        </time>
      </div> -->
    </div>

    <div class="sr-only">
      Rol
    </div>
    <div class="text-xs body-secondary">
      {{ job.position }}
    </div>
  </div>
</template>
