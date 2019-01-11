<template lang="html">
  <div class="hero-bg">
    <div class="container mx-auto py-32 px-4">
      <div class="flex mb-4 items-center flex-col-reverse md:flex-row">
        <div class="w-full md:w-2/5 text-white">
          <h1 class="header">
            The Search Tool for Software Developers
          </h1>
          <p class="paragraph">
            Search multiple sources at once and find solutions to your coding problems. Code examples, issues, questions, docs – everything at your fingertips.
          </p>

          <div class="flex">
            <a
              href="https://github.com/CodePilotai/codepilot"
              target="_blank"
              class="button button-large button-secondary mr-2 ml-0"
            >
              GitHub
            </a>
          </div>
          <p class="paragraph text-sm">
            <strong>MIT Open Source!</strong>
          </p>
          <div class="mt-8 bg-white rounded p-3 powered-container">
            <p class="title text-grey mb-2">Powered by</p>
            <div class="flex items-center flex-wrap">
              <img class="powered-logo mr-6" src="../assets/github-logo.png" alt="GitHub logo">
              <img class="powered-logo mr-6" src="../assets/searchcode-logo.png" alt="Searchcode logo">
              <img class="powered-logo mb-2" src="../assets/stack-overflow-logo.png" alt="Stack Overflow logo">
            </div>
          </div>
        </div>
        <div class="w-full md:w-3/5 mb-8">
          <img
            data-rellax-speed="-1"
            alt="CodePilot.ai App"
            src="../assets/app-sample.png"
            class="rellax md:max-w-none hero-img md:ml-8"
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
.hero-bg
  background-image: linear-gradient(-180deg, #778DEA 0%, #4457A7 80%)

  &:after
    content: ''
    border-width: 0 100vw 5vh 0
    border-color: transparent #4457A7 transparent transparent

.hero-img
  box-shadow: 0 25px 40px 0 rgba(0,0,0,0.20)
  border-radius: 6px

.powered-logo
  max-height: 32px
  margin-bottom: 0.5rem

.powered-container
  box-shadow: 0 3px 13px 0 rgba(0,0,0,0.15)
</style>
