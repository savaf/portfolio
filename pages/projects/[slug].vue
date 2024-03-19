<template>
  <main class="isolate w-full mt-16 sm:mt-32 pb-16 sm:pb-32">
    <div class="container mx-auto max-w-7xl">
      <!-- Check if there are projects and then load -->
      <!-- <div v-if="pending" class="font-general-medium container mx-auto text-center text-ternary-light">
        <h1>Loading...</h1>
      </div> -->
      <ContentDoc v-slot="{ doc }">
        <div>
          <!-- Project heading and meta info -->
          <div>
            <p class="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-light mt-14 sm:mt-20 mb-7">
              {{ doc.title }}
            </p>
            <div class="flex">
              <div class="flex items-center mr-10">
                <Icon name="i-heroicons-clock-solid" class="w-4 h-4 text-ternary-light" aria-hidden="true" />
                <span class="font-general-medium ml-2 leading-none text-primary-light">{{ doc.publishDate }}</span>
              </div>
              <div class="flex items-center">
                <Icon name="i-heroicons-tag-solid" class="w-4 h-4 text-ternary-light" aria-hidden="true" />
                <span class="font-general-medium ml-2 leading-none text-primary-light">{{ doc.tags }}</span>
              </div>
            </div>
          </div>

          <!-- Project gallery -->
          <div class="gallery mt-12">
            <div
              v-for="projectImage in doc.projectImages"
              :key="projectImage.id"
              class="mb-10 sm:mb-0 w-full lg:w-[350px] lg:h-[310px]"
            >
              <NuxtImg
                :src="projectImage.img"
                class="rounded-xl cursor-pointer shadow-lg sm:shadow-none object-cover w-full h-full"
              />
            </div>
          </div>

          <!-- Project info -->
          <div class="block sm:flex gap-0 sm:gap-10 mt-14">
            <!-- Single project left section details -->
            <div class="w-full sm:w-1/3 text-left">
              <!-- Single project client details -->
              <!-- <div v-if="project.companyInfos?.length" class="mb-7">
                <p class="font-general-medium text-2xl text-secondary-light mb-2">
                  {{ project.clientTitle }}
                </p>
                <ul class="leading-loose">
                  <li v-for="info in project.companyInfos" :key="info.id" class="font-general-regular text-ternary-light">
                    <span>{{ info.title }}: </span>
                    <a href="#" :class="info.title == 'Website' || info.title == 'Phone' ? 'hover:underline cursor-pointer' : ''" aria-label="Project website and phone">{{ info.details }}</a>
                  </li>
                </ul>
              </div> -->
              <!-- Single project objectives -->
              <!-- <div class="mb-7">
                <p class="font-general-medium text-2xl text-ternary-light mb-2">
                  {{ project.objectivesTitle }}
                </p>
                <p class="font-general-regular text-ternary-light">
                  {{ project.objectivesDetails }}
                </p>
              </div> -->

              <!-- Single project technologies -->
              <div class="mb-7">
                <p class="font-general-medium text-2xl text-ternary-light mb-2">
                  {{ doc.techTitle }}
                </p>
                <p class="font-general-regular text-ternary-light">
                  {{ doc.technologies.join(", ") }}
                </p>
              </div>

              <!-- Links -->
              <div class="mb-7 space-y-3">
                <a v-if="doc.previewLink"  :href="doc.previewLink" target="_blank" class="flex justify-center items-center w-36 sm:w-48 text-lg border border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500">
                  <span class="text-sm sm:text-lg font-general-medium duration-100">
                    Go Site
                  </span>
                  <Icon name="tabler:world-www" class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100" aria-hidden="true" />
                </a>
                <a v-if="doc.codeLink" :href="doc.codeLink" target="_blank" class="flex justify-center items-center w-36 sm:w-48 text-lg border border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500">
                  <span class="text-sm sm:text-lg font-general-medium duration-100">
                    View Code
                  </span>
                  <Icon name="mdi:code-braces" class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100" aria-hidden="true" />
                </a>
              </div>

              <!-- Single project social sharing -->
              <!-- <div v-if="project.socialLinks?.length">
                <p class="font-general-medium text-2xl text-ternary-light mb-2">
                  {{ project.socialTitle }}
                </p>
                <div class="flex items-center gap-3 mt-5">
                  <a v-for="social in project.socialLinks" :key="social.id" :href="social.url" target="__blank" aria-label="Share Project" class="bg-ternary-dark text-gray-400 hover:text-primary-light p-2 rounded-lg shadow-sm duration-500">
                    <Icon :name="social.icon" class="w-4 lg:w-5 h-4 lg:h-5" />
                  </a>
                </div>
              </div> -->
            </div>

            <!-- Single project right section details -->
            <article class="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
              <ContentRenderer
                class="mb-5 prose prose-slate prose-invert md:prose-lg lg:prose-xl"
                :value="doc"
              />
            </article>
          </div>

          <!-- Project related projects -->
          <!-- <ProjectsRelatedProjects /> -->
        </div>
      </ContentDoc>

      <!-- Load not found components if no project found -->
      <!-- <div v-else class="font-general-medium container mx-auto text-center text-ternary-light">
        <h1>No projects yet</h1>
      </div> -->
    </div>
  </main>
</template>

<style lang="scss">
.gallery {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-gap: 1rem;
  margin-top: 2rem;

  @screen sm {
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  }
}
</style>
