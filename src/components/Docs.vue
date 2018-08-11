<template lang="html">
<div class="relative">
  <div class="docs-bg">
    <div class="flex relative md:py-32 flex-col md:flex-row justify-center">
      <div class="docs-box mx-4 md:w-1/3 p-4 md:p-8 pb-0 bg-indigo text-white rounded-lg">
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
</div>
</template>

<script>
export default {
}
</script>

<style lang="sass">
.docs-box
  box-shadow: 0 25px 40px 0 rgba(0,0,0,0.20)

.docs-bg
  &:after
    background-image: url('../assets/docs-left.png')
    transform: translateZ(-0.5px) scale(1.5)

    @media (min-width: 768px)
      background-image: url('../assets/docs-1.png')
      transform: translateZ(-1px) scale(1.5)

  &:before
    background-image: url('../assets/docs-right.png')
    transform: translateZ(-0.5px) scale(1.5)

    @media (min-width: 768px)
      background-image: url('../assets/docs-2.png')
      transform: translateZ(-2px) scale(2)

  &:before, &:after
    content: ''
    position: relative
    display: block
    height: 12rem
    width: 100%
    background-position: center
    background-repeat: no-repeat
    background-size: contain
    z-index: -1

    @media (min-width: 768px)
      position: absolute
      top: 0
      right: 0
      bottom: 0
      left: 0
      height: auto
      background-size: contain
</style>
