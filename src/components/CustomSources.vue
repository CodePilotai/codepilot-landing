<template lang="html">
<div class="bg-grey-lighter">
  <div class="container mx-auto">
    <div class="flex items-center px-4 py-16 md:py-32 pb-12 flex-col-reverse md:flex-row">
      <div class="w-full md:w-1/2">
        <img class="mb-2" src="../assets/sun-icon.svg">
        <p class="title text-pink">Your sources. Combined.</p>
        <h3 class="header">Search Custom Sources</h3>
        <p class="paragraph">
          Pick from a list of suggested Custom Sources that match your developer profile or add your own.
        </p>
        <p class="paragraph">
          We will search through those using our <strong>built-in browser</strong>.
        </p>
      </div>
      <div class="w-full md:w-1/2 text-right md:mr-8 mb-8">
        <img
          data-rellax-speed="0.5"
          class="sources-img rounded-lg"
          src="../assets/custom-sources.png"
          alt="Custom Sources Screenshot"
        >
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Rellax from 'rellax'

export default {
  mounted () {
    if (this.$el.clientWidth > 768) {
      Rellax('.sources-img', {
        vertical: true,
        center: true
      })
    }
  }
}
</script>

<style lang="sass">
.sources-img
  box-shadow: 0 25px 40px 0 rgba(0,0,0,0.20)
</style>
