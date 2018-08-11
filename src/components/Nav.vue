<template>
  <div
    class="navigation pin-t pin-x fixed"
    :class="{
      'navigation-white': hasBackground
    }"
  >
    <div class="container mx-auto flex justify-between h-16 items-center px-4">
      <a class="logo" href="/">
        <img :src="logoVariant" alt="CodePilot.ai Logo">
      </a>
      <div class="flex">
        <a class="link" href="/">About</a>
        <a class="link" href="/">Release Notes</a>
        <a class="link" href="/">Blog</a>
      </div>
    </div>
  </div>
</template>

<script>
let lastScrollPosition = 0
let ticking = false

export default {
  name: 'Nav',
  data () {
    return {
      hasBackground: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  computed: {
    logoVariant () {
      return this.hasBackground
        ? require('../assets/codepilot-logo-dark.png')
        : require('../assets/codepilot-logo.png')
    }
  },
  methods: {
    handleScroll () {
      lastScrollPosition = window.scrollY

      if (!ticking) {
        window.requestAnimationFrame(() => {
          this.hasBackground = lastScrollPosition > 10
          ticking = false
        })

        ticking = true
      }
    }
  }
}
</script>

<style lang="sass">
.navigation
  background-color: rgba(#fff, 0)
  transition: background-color 0.2s ease
  z-index: 10

  &.navigation-white
    background-color: rgba(#fff, 1)
    box-shadow: 0 3px 10px 0 rgba(#000, 0.1)

    .link
      color: #3C4150
</style>
