<template lang="html">
  <div class="hero-bg">
    <div class="container mx-auto py-32">
      <div class="flex mb-4 items-center">
        <div class="w-2/5 text-white">
          <h1 class="text-5xl mb-4 font-black">
            The Search Tool for Software Developers
          </h1>
          <p class="paragraph">
            Search multiple sources at once and find solutions to your coding problems. Code examplse, issues, questions, docs –everything at your fingertips.
          </p>
          <p class="paragraph mb-8">
            <strong class="font-black">
              Powered by Machine Learning.
            </strong>
          </p>
          <button type="button" class="button button-secondary">
            Get CodePilot
          </button>
          <button type="button" class="button button-white">
            Learn More
          </button>
          <p class="paragraph text-sm">
            Now <strong>FREE</strong> for private and commercial use!
          </p>
          <p class="title mt-12">Available for</p>
          <div class="flex items-center mt-2">
            <img class="mr-5 pb-2" src="../assets/apple-logo.png" alt="Available for Appl Mac OS">
            <img class="mr-5" src="../assets/windows-logo.png" alt="Available for Microsoft Windows">
            <img class="mr-5" src="../assets/ubuntu-logo.png" alt="Available for Linux">
          </div>
          <div class="mt-8 bg-white rounded p-3 inline-block powered-container">
            <p class="title text-grey mb-2">Powered by</p>
            <div class="flex items-center">
              <img class="powered-logo mr-4" src="../assets/github-logo.png" alt="GitHub logo">
              <img class="powered-logo mr-4" src="../assets/searchcode-logo.png" alt="Searchcode logo">
              <img class="powered-logo" src="../assets/stack-overflow-logo.png" alt="Stack Overflow logo">
            </div>
          </div>
        </div>
        <div class="w-3/5">
          <img
            alt="CodePilot.ai App"
            src="../assets/app-sample.jpg"
            class="max-w-none hero-img"
          >
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
.max-w-none
  max-width: none

.hero-bg
  background-image: linear-gradient(-180deg, #778DEA 0%, #4457A7 80%)

  &:after
    content: ''
    border-width: 0 100vw 5vh 0
    border-color: transparent #4457A7 transparent transparent

.hero-img
  margin-left: 30px
  box-shadow: 0 25px 40px 0 rgba(0,0,0,0.20)
  border-radius: 6px

.powered-logo
  max-height: 32px

.powered-container
  box-shadow: 0 3px 13px 0 rgba(0,0,0,0.15)
</style>
