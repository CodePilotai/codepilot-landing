<template lang="html">
<div>
  <div class="w-full relative bg-indigo cta">
    <div class="container mx-auto py-32 px-4">
      <div class="flex items-center flex-col md:flex-row">
        <div>
          <img class="mb-2" src="../assets/speedo-icon.svg">
          <p class="title text-yellow">IMPROVE YOUR DEVELOPMENT EXPERIENCE</p>
          <h3 class="header text-white">Start searching with CodePilot </h3>
        </div>
        <div class="md:ml-32">
          <button
            type="button" name="button"
            class="button button-secondary button-large m-0 mt-8 md:mt-12"
            @click="$emit('open-download')"
          >
            Download Now
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="w-full relative bg-grey-lighter">
    <div class="container mx-auto pt-8 px-4">
      <div class="flex items-center justify-around flex-col md:flex-row">
        <img class="w-4/5 md:w-2/5 mb-8" src="../assets/ca-banner.png" alt="Code intent results">
        <img class="w-4/5 md:w-2/5 mb-8" src="../assets/startup-school-banner.png" alt="Code intent results">
      </div>
    </div>
    <div class="px-4">
      <div class="container mx-auto pt-4 pb-6 items-center flex">
        <img src="../assets/codepilot-logo-dark.png" alt="CodePilot logo" class="h-10">
        <span class="uppercase text-grey-dark pt-2 pl-4">– All rights reserved</span>
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
      Rellax('.rellax', {
        vertical: true,
        center: true
      })
    }
  }
}
</script>

<style lang="sass">
.cta
  background-image: linear-gradient(155deg, #6883f5 0%, #495fb9 80%)
</style>
