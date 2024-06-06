<script setup>
const footerNavigation = {
  solutions: [
    { name: 'Marketing', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Insights', href: '#' },
  ],
  support: [
    { name: 'Pricing', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'API Status', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Partners', href: '#' },
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
}
</script>

<template>
  <!-- Footer -->
  <footer class="mt-32 bg-gray-900 sm:mt-56" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">
      Footer
    </h2>
    <div class="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
      <p class="mt-6 text-sm text-gray-500 sm:mt-0">
        Made with
        <UIcon name="i-heroicons-heart-solid" class="w-3 h-3 text-red-600" />
        by Sinver Aguilo.
      </p>
    </div>
  </footer>
</template>
