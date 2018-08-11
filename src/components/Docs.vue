<template lang="html">
<div class="relative">
  <div class="pin docs-bg">
    <picture
      data-rellax-speed="-2.5"
      class="rellax"
    >
      <source media="(min-width: 768px)" srcset="../assets/docs-1.png"/>
      <img src="../assets/docs-left.png">
    </picture>
    <picture
      data-rellax-speed="-1.5"
      class="rellax"
    >
      <source media="(min-width: 768px)" srcset="../assets/docs-2.png"/>
      <img src="../assets/docs-right.png">
    </picture>
  </div>
  <div class="flex relative py-32 md:my-16 flex-col md:flex-row justify-center">
    <div class="docs-box mx-4 md:w-1/3 p-4 md:p-8 pb-0 md:pb-0 bg-indigo text-white rounded-lg">
      <img class="mb-2" src="../assets/folder-icon.svg">
      <p class="title text-yellow">More than 100 docs to pick from.</p>
      <h3 class="header">Browse Documentation</h3>
      <p class="paragraph">
        Access documentation for your selected languages, frameworks and tooling.
      </p>
      <p class="paragraph">
        Powered by <strong>DevDocs.io</strong>.
      </p>
    </div>
  </div>
</div>
</template>

<script>
import Rellax from 'rellax'

export default {
  mounted () {
    Rellax('.rellax', {
      vertical: true,
      center: true
    })
  }
}
</script>

<style lang="sass">
.docs-box
  box-shadow: 0 25px 40px 0 rgba(0,0,0,0.20)

.docs-bg
  position: absolute

.rellax
  z-index: -1
  position: absolute
  margin: 0 auto
  top: -120px
  left: 0
  right: 0
  bottom: 0
  text-align: center

  @media (max-width: 768px)
    top: 100px

    & + &
      top: 300px
</style>
