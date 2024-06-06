import kute from 'kute.js/dist/kute.esm.js'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      kute,
    },
  }
})
