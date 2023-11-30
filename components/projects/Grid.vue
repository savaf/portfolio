<script setup lang="ts">
const route = useRoute();

const isProjectsRoute = route.name === "projects";

const projectsHeading = "Projects Portfolio";
const projectsDescription = "Some of the projects I have successfully completed";
let selectedProject = "";
let searchString = ref("");
let filteredProjects = ref([]);
const onlyFields = ["title", "category", "img", "slug"];
const limit = isProjectsRoute ? await queryContent("projects").count() : 6;

watch([searchString], async () => {
  if (searchString.value) {
    filteredProjects.value = await filterProjectsBySearch(searchString.value);
  } else {
    filteredProjects.value = await fetchProjects();
  }
});

function fetchProjects() {
  return queryContent("projects")
    .limit(limit)
    .sort({
      position: 1,
    })
    .only(onlyFields)
    .find();
}

onMounted(async () => {
  filteredProjects.value = await fetchProjects();
});

// const filteredProjects = await queryContent("projects")
//   .where({
//     $or: [
//       { title: { $regex: searchString, $options: "i" } }, // 'i' hace que la búsqueda sea insensible a mayúsculas y minúsculas
//       { category: { $regex: searchString, $options: "i" } },
//       { client: { $regex: searchString, $options: "i" } },
//       { "projectDetails.details": { $regex: searchString, $options: "i" } }, // Accede a los detalles del proyecto dentro del array
//       { objectivesDetails: { $regex: searchString, $options: "i" } },
//       { tag: { $in: [new RegExp(searchString, "i")] } }, // Busca la cadena en el array tag
//       { technologies: { $in: [new RegExp(searchString, "i")] } }, // Busca la cadena en el array technologies
//     ],
//   })
//   .limit(6)
//   .find();
// console.log(filteredProjects);

// const filteredProjects = computed(() => {
//   // if (selectedProject) {
//   //   return projects.filter((item) => {
//   //     let category = item.category.charAt(0).toUpperCase() + item.category.slice(1);
//   //     return category.includes(selectedProject);
//   //   });
//   // } else
//   // if (searchString.value) {
//   //   return filterProjectsBySearch(searchString.value);
//   // }
//   return await queryContent("projects")
//     .limit(6)
//     .sort({
//       position: 1,
//     })
//     .find();
// });

function filterProjectsBySearch(searchString: string) {
  return queryContent("projects")
    .where({
      $or: [
        {
          title: {
            $icontains: searchString,
          },
        },
        {
          category: {
            $icontains: searchString,
          },
        },
        {
          client: {
            $icontains: searchString,
          },
        },
        {
          "projectDetails.details": {
            $icontains: searchString,
          },
        },
        {
          objectivesDetails: {
            $icontains: searchString,
          },
        },
        // {
        //   tag: {
        //     $in: [new RegExp(searchString, "i")],
        //   },
        // },
        // {
        //   technologies: {
        //     $in: [new RegExp(searchString, "i")],
        //   },
        // },
      ],
      // $or: [
      //   { title: { $regex: searchString, $options: "i" } }, // 'i' hace que la búsqueda sea insensible a mayúsculas y minúsculas
      //   { category: { $regex: searchString, $options: "i" } },
      //   { client: { $regex: searchString, $options: "i" } },
      //   { "projectDetails.details": { $regex: searchString, $options: "i" } }, // Accede a los detalles del proyecto dentro del array
      //   { objectivesDetails: { $regex: searchString, $options: "i" } },
      //   { tag: { $in: [new RegExp(searchString, "i")] } }, // Busca la cadena en el array tag
      //   { technologies: { $in: [new RegExp(searchString, "i")] } }, // Busca la cadena en el array technologies
      // ],
    })
    .limit(limit)
    .sort({
      position: 1,
    })
    .only(onlyFields)
    .find();
}
</script>

<template>
  <div class="pt-10 sm:pt-20 md:pt-24">
    <!-- Projects grid header -->
    <div class="text-center">
      <p class="font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-light">
        {{ projectsHeading }}
      </p>
      <!-- Note: This description is commented out, but if you want to see it, just uncomment this -->
      <p class="text-lg sm:text-xl text-gray-500 dark:text-ternary-light">
        {{ projectsDescription }}
      </p>
    </div>

    <!-- Filter and search projects -->
    <form class="mt-8 sm:mt-10">
      <h3 class="font-general-regular text-center text-ternary-light text-md sm:text-xl font-normal mb-4">Search projects by title or filter by category</h3>
      <div class="flex justify-between border-b border-secondary-dark pb-3 gap-2">
        <div class="flex justify-between gap-2">
          <button type="button" @click="filterProjectsBySearch" class="hidden sm:block bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer">
            <Icon name="i-heroicons-magnifying-glass" class="w-6 h-6 text-ternary-light" aria-hidden="true" />
          </button>
          <input v-model="searchString" class="font-general-medium pl-3 pr-1 sm:px-4 py-2 border-1 border-secondary-dark rounded-lg text-sm sm:text-md bg-ternary-dark text-ternary-light" id="name" name="name" type="search" required placeholder="Search Projects" aria-label="Name" @keydown.enter="filterProjectsBySearch" />
        </div>
        <!-- <ProjectsFilter @change="selectedProject = $event" /> -->
      </div>
    </form>

    <!-- Projects grid -->
    <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
      <ProjectsCard as="article" :project="project" v-for="project in filteredProjects" :key="project.slug" />
    </section>
  </div>
</template>
