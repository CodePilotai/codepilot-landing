<template lang="html">
  <div class="filters-bg">
    <div class="container mx-auto py-16 md:py-32 px-4">
      <div class="flex mb-4 items-center flex-col md:flex-row">
        <div class="w-full w-1/2">
          <img
            data-rellax-speed="-0.5"
            alt="CodePilot.ai App"
            src="../assets/filters-screenshot.png"
            class="rellax md:max-w-none filters-img md:mr-8 mb-8"
          >
        </div>
        <div class="w-full w-1/2 text-white">
          <img class="mb-2" src="../assets/toggles-icon.svg">
          <p class="title text-sm text-yellow mb-2">
            DIFFERENT FILTERS FOR DIFFERENT SOURCES
          </p>
          <h1 class="header">
            Specialized Filters for<br/>tailored results
          </h1>
          <p class="paragraph">
            You can now filter <strong>GitHub</strong> results based on the libraries the project depends on.
            Similar API syntax is no longer an issue to worry when searching for code.
          </p>
          <p class="paragraph text-base">
            Only available for <strong>JavaScript</strong> projects that use a package.json file to declare their dependencies.<br/>
            Support for other languages like <strong>Ruby</strong> and <strong>Python</strong> coming soon…
          </p>
          <p class="title text-lg mt-12 mb-4 font-base">Other filters</p>
          <dl>
            <dt class="dt">Extension</dt>
            <dd class="dd">Include and exclude selected extensions from the result list.</dd>
            <dt class="dt">Exact Match</dt>
            <dd class="dd">Only include results that contain the whole search query.</dd>
            <dt class="dt">License</dt>
            <dd class="dd">Show results that match the selected licenses.</dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="sass">
.filters-bg
  background-image: linear-gradient(180deg, #F3516E 0%, #FF2F54 92%)
  margin-top: 150px
  position: relative

  &:before
    content: ''
    position: absolute
    border-width: 0 0 5vh 100vw
    border-color: transparent transparent #F3516E transparent
    margin-top: -5vh

    @media (max-width: 768px)
      top: 1px

  &:after
    content: ''
    position: absolute
    border-width: 5vh 100vw 0 0
    border-color: #FF2F54 transparent transparent transparent

.filters-img
  box-shadow: 0 25px 40px 0 rgba(0,0,0,0.20)
  border-radius: 6px
</style>
