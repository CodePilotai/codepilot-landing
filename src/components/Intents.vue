<template lang="html">
  <div class="container mx-auto mt-32 px-4" id="intents">
    <div class="text-center">
      <h2 class="header mb-8 text-black font-bold">
        What are you looking for? Pick your intent.
      </h2>
      <button
        v-for="intent of intents"
        :key="intent"
        :class="[intent === activeIntent ? 'button-primary' : 'button-dark']"
        class="button w-1/3 md:w-auto mx-2"
        type="button"
        @click="activeIntent = intent"
      >
        {{ intent }}
      </button>
    </div>
    <transition name="slide" mode="out-in">
      <div v-if="allActive || activeIntent === 'Code'" key="Code" class="flex mt-12 items-center flex-col md:flex-row">
        <div class="md:w-2/5 text-left">
          <p class="title text-sm text-indigo mb-2">
            Code Intent
          </p>
          <h2 class="header">Search for code,<br/>get real examples.</h2>
          <p class="paragraph">
            Trying this new library? Looking for some projects that use it? Wondering how other projects implement the feature you’re working on?
          </p>
          <p class="paragraph">
            Use <strong>code</strong> as query for best results.
          </p>
          <p class="title text-grey">
            Code sources
          </p>
          <div class="flex py-2 items-center flex-wrap mb-8">
            <img class="intent-source-img mr-4" src="../assets/github-logo.png" alt="GitHub logo">
            <img class="intent-source-img" src="../assets/searchcode-logo.png" alt="GitHub logo">
          </div>
        </div>
        <div class="md:w-3/5 text-center">
          <img
            src="../assets/code-intent.png"
            alt="Code intent results"
            class="rounded-full"
          >
        </div>
      </div>
      <div v-if="allActive || activeIntent === 'Learn'" key="Learn" class="flex mt-12 items-center flex-col md:flex-row">
        <div class="md:w-2/5 text-left">
          <p class="title text-indigo mb-2">
            Learn Intent
          </p>
          <h2 class="header">Got a question?<br/>We got the answer.</h2>
          <p class="paragraph">
            Trouble implementing a feature? Ask the question and CodePilot will look through Stack Overflow and other sources to find the most fitting materials based on your developer profile.
          </p>
          <p class="paragraph">
            CodePilot will also look for <strong>Pull Requests</strong> and <strong>Commits</strong> that might have implemented that feature.
          </p>
          <p class="paragraph">
            Use <strong>natural language</strong> as query for best results.
          </p>
          <p class="title text-grey">
            Learning sources
          </p>
          <div class="flex py-2 items-center flex-wrap mb-8">
            <img class="intent-source-img mr-4" src="../assets/stack-overflow-logo.png" alt="Stack Overflow logo">
            <img class="intent-source-img mr-4" src="../assets/github-logo.png" alt="GitHub logo">
            <img class="intent-source-img" src="../assets/youtube-logo.png" alt="YouTube logo">
          </div>
        </div>
        <div class="md:w-3/5 text-center">
          <img
            class="intent-img rounded-full"
            src="../assets/learn-intent.png"
            alt="Learn intent results"
          >
        </div>
      </div>
      <div v-if="allActive || activeIntent === 'Errors'" key="Errors" class="flex mt-12 items-center flex-col md:flex-row">
        <div class="md:w-2/5 text-left">
          <p class="title text-indigo mb-2">
            Errors Intent
          </p>
          <h2 class="header">Having problems?<br/>Let’s look into it.</h2>
          <p class="paragraph">
            Stuck with an error? Describe the issue and CodePilot might find a solution for your problem.
          </p>
          <p class="title text-grey">
            Learning sources
          </p>
          <div class="flex py-2 items-center flex-wrap-row mb-8">
            <img class="intent-source-img mr-4" src="../assets/stack-overflow-logo.png" alt="Stack Overflow logo">
            <img class="intent-source-img mr-4" src="../assets/github-logo.png" alt="GitHub logo">
          </div>
        </div>
        <div class="md:w-3/5 text-center">
          <img src="../assets/error-intent.png" alt="Errors intent results" class="rounded-full">
        </div>
      </div>
      <div v-if="allActive || activeIntent === 'Docs'" key="Docs" class="flex mt-12 items-center flex-col md:flex-row">
        <div class="md:w-2/5 text-left">
          <p class="title text-indigo mb-2">
            Docs Intent
          </p>
          <h2 class="header">Sometimes all you need are the docs.</h2>
          <p class="paragraph">
            By default we will serve you the content from the awesome <strong>DevDocs.io</strong> based on your <strong>Developer Profile</strong>. You can also use the <strong>Custom Sources</strong> to add your own sources, like your company guidelines or project documentation.
          </p>
          <p class="paragraph">
            Use <strong>code</strong> as query for best results.
          </p>
          <p class="title text-grey">
            Learning sources
          </p>
          <div class="flex py-2 items-center flex-wrap-row mb-8">
            <img class="devdocs-icon-img mr-4" src="../assets/devdocs-logo.png" alt="Stack Overflow logo">
          </div>
        </div>
        <div class="md:w-3/5 text-center">
          <img src="../assets/docs-intent.png" alt="Docs intent results" class="rounded-full">
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      intents: [
        'Code',
        'Learn',
        'Errors',
        'Docs'
      ],
      activeIntent: 'Code',
      allActive: true
    }
  },
  mounted () {
    this.allActive = false
  }
}
</script>

<style lang="sass">
.intent-source-img
  max-height: 34px
  margin-bottom: 1rem

.devdocs-icon-img
  margin-bottom: 1rem
  max-height: 70px

.slide-enter-active, .slide-leave-active
  transition: transform .5s

.slide-enter,
  transform: translateX(-150%)
.slide-leave-to
  transform: translateY(150%)

.intent-img-container
  max-width: 500px
  max-height: 500px
  box-shadow: 0 25px 40px 0 rgba(0,0,0,0.20) inset
  text-align: center
</style>
