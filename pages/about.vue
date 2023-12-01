<script setup lang="ts">
// const { data } = await useAsyncData("aboutPageContent", async () => {
//   const [
//     // destructure the results
//     bio,
//     socialLinks,
//     educations,
//     jobExperiences,
//   ] = await Promise.all([
//     // perform all queries in parallel
//     queryContent("/bio").findOne(),
//     queryContent("social_links").findOne(),
//     queryContent("education").find(),
//     queryContent("experiences").find(),
//   ]);

//   return {
//     bio: bio,
//     socialLinks: socialLinks.links,
//     educations: educations,
//     jobExperiences: jobExperiences,
//   };
// });

const [
  // destructure the results
  bio,
  { links: socialLinks },
  educations,
  jobExperiences,
] = await Promise.all([
  // perform all queries in parallel
  queryContent("/bio").findOne(),
  queryContent("social_links").findOne(),
  queryContent("education").find(),
  queryContent("experiences").find(),
]);

// const { bio, socialLinks, educations, jobExperiences } = data.value;
</script>

<template>
  <main class="isolate w-full pt-28 bg-secondary-dark">
    <div class="container mx-auto">
      <AboutBio :bio="bio" :social-links="socialLinks" />
    </div>
    <AboutCounter />
    <AboutExperience :job-experiences="jobExperiences" class="container mx-auto mt-16 sm:mt-32" />
    <div class="bg-ternary-dark mt-16 sm:mt-32">
      <AboutEducation :educations="educations" class="container mx-auto py-16" />
    </div>
  </main>
</template>
