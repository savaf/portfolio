<script setup lang="ts">
const emailDataToSend = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

function sendEmail() {
  const { name, email, subject, message } = emailDataToSend.value;

  window.open(
    `mailto:
      ${email}
      ?subject=${subject} - ${name}
      &body=${message}
      \n ${name}
      \n ${email}
      \n from ${window.location.href}
    `,
  );
}
</script>

<template>
  <!-- Contact form -->
  <div class="w-full md:w-1/2">
    <div class="leading-loose max-w-xl m-4 p-7 bg-secondary-dark rounded-xl shadow-xl text-left">
      <p class="font-general-medium text-primary-light text-2xl mb-8">Contact Form</p>
      <form class="font-general-regular space-y-7" @submit.prevent="sendEmail">
        <div class="">
          <label class="block text-lg text-primary-light mb-2" for="name">Full Name</label>
          <input id="name" v-model="emailDataToSend.name" class="w-full px-5 py-2 border border-primary-dark border-opacity-50 text-secondary-light bg-ternary-dark rounded-md shadow-sm text-md" name="name" type="text" required="" placeholder="Your Name" aria-label="Name" />
        </div>
        <div class="mt-6">
          <label class="block text-lg text-primary-light mb-2" for="email">Email</label>
          <input id="email" v-model="emailDataToSend.email" class="w-full px-5 py-2 border border-primary-dark border-opacity-50 text-secondary-light bg-ternary-dark rounded-md shadow-sm text-md" name="email" type="text" required="" placeholder="Your Email" aria-label="Email" />
        </div>
        <div class="mt-6">
          <label class="block text-lg text-primary-light mb-2" for="subject">Subject</label>
          <input id="subject" v-model="emailDataToSend.subject" class="w-full px-5 py-2 border border-primary-dark border-opacity-50 text-secondary-light bg-ternary-dark rounded-md shadow-sm text-md" name="subject" type="text" required="" placeholder="Subject" aria-label="Subject" />
        </div>

        <div class="mt-6">
          <label class="block text-lg text-primary-light mb-2" for="message">Message</label>
          <textarea id="message" v-model="emailDataToSend.message" class="w-full px-5 py-2 border border-primary-dark border-opacity-50 text-secondary-light bg-ternary-dark rounded-md shadow-sm text-md" name="message" cols="14" rows="6" aria-label="Message" />
        </div>

        <div class="mt-6">
          <button type="submit" class="px-4 py-2.5 text-white tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500" aria-label="Send Message" @click="sendEmail">Send Message</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
