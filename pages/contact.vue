<script>
export default {
  scrollToTop: true,
  data: () => {
    return {
      contacts: [
        {
          id: 1,
          name: "Santo Domingo, Dominican Republic",
          icon: "i-heroicons-map-pin",
        },
        {
          id: 2,
          name: "email@domain.com",
          icon: "i-heroicons-envelope",
        },
        // {
        //   id: 3,
        //   name: "555 8888 888",
        //   icon: "i-heroicons-phone",
        // },
      ],
    };
  },
};
</script>

<template>
  <div class="container mx-auto flex justify-center">
    <ContactForm />
  </div>
</template>
