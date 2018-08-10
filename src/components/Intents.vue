<template lang="html">
  <div class="container mx-auto mt-32">
    <div class="text-center">
      <h2 class="text-5xl mb-8 text-black font-bold">What are you looking for? Pick your intent.</h2>
      <button
        v-for="intent of intents"
        :key="intent"
        :class="[intent === activeIntent ? 'button-primary' : 'button-dark']"
        class="button"
        type="button"
        @click="activeIntent = intent"
      >
        {{ intent }}
      </button>
    </div>
    <transition name="fade" mode="out-in">
      <div v-if="activeIntent === 'Code'" key="Code" class="flex mt-12 items-center">
        <div class="w-2/5 text-left">
          <h2 class="text-black font-black text-5xl mb-4">Search for code,<br/>get real examples</h2>
          <p class="paragraph">
            Trying this new library? Looking for some projects that use it? Wondering how other projects implement the feature you’re working on?
          </p>
          <p class="paragraph">
            We got you covered.
          </p>
          <p class="title text-grey">
            Code sources
          </p>
          <div class="flex py-2 items-center">
            <img class="intent-source-img mr-4" src="../assets/github-logo.png" alt="GitHub logo">
            <img class="intent-source-img" src="../assets/searchcode-logo.png" alt="GitHub logo">
          </div>
        </div>
        <div class="w-3/5 text-center">
          <img src="../assets/code-intent.jpg" alt="Code intent results">
        </div>
      </div>
      <div v-if="activeIntent === 'Learn'" key="Learn" class="flex mt-12 items-center">
        <div class="w-2/5 text-left">
          <h2 class="text-black font-black text-5xl mb-4">Having questions?<br/>We got the answers.</h2>
          <p class="paragraph">
            Trouble implementing a feature? Ask the question and CodePilot will look through Stack Overflow and other sources to find the most fitting answer based on your developer profile.
          </p>
          <p class="title text-grey">
            Learning sources
          </p>
          <div class="flex py-2 items-center">
            <img class="intent-source-img mr-4" src="../assets/stack-overflow-logo.png" alt="Stack Overflow logo">
            <img class="intent-source-img mr-4" src="../assets/github-logo.png" alt="GitHub logo">
            <img class="intent-source-img" src="../assets/youtube-logo.png" alt="YouTube logo">
          </div>
        </div>
        <div class="w-3/5 text-center">
          <img src="../assets/code-intent.jpg" alt="Code intent results">
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
      activeIntent: 'Code'
    }
  }
}
</script>

<style lang="sass">
.intent-source-img
  max-height: 34px

.fade-enter-active, .fade-leave-active
  transition: opacity .3s

.fade-enter, .fade-leave-to
  opacity: 0
</style>
