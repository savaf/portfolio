import anime from 'animejs/lib/anime.es.js'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      anime,
    },
  }
})
