<template lang="html">
  <div class="container mx-auto mt-32">
    <h2 class="font-black text-5xl text-center text-black">
      Personalize your results
    </h2>
    <div class="flex items-center mt-16">
      <div class="w-2/5 text-right mr-8">
        <img class="profile-switch-img" src="../assets/profile-switch.png" alt="Developer profile switcher">
      </div>
      <div class="w-3/5">
        <p class="title text-indigo">Personalize your experience.</p>
        <h3 class="text-4xl mb-4">Create Developer Profiles</h3>
        <p class="paragraph">
          Create Developer Profiles based on the projects you’re working on. Our <strong>ML-powered Ranker</strong> will analyze and rank the results based on relevancy for your current profile.
        </p>
        <p class="paragraph">
          Get results for technologies and tools that match your current project.
        </p>
      </div>
    </div>
    <div class="flex items-center mt-32">
      <div class="w-1/2">
        <p class="title text-pink">Your sources. Combined.</p>
        <h3 class="text-4xl mb-4">Search Custom Sources</h3>
        <p class="paragraph">
          Pick from a list of suggested Custom Sources that match your developer profile or add your own.
        </p>
        <p class="paragraph">
          We will search through those using our <strong>built-in browser</strong>.
        </p>
      </div>
      <div class="w-1/2 text-right mr-8">
        <img class="sources-img" src="../assets/source-images.png" alt="Developer profile switcher">
      </div>
    </div>
    <div class="flex mt-32 relative">
      <div class="w-1/4 mr-8 relative">
        <img class="absolute pin-r docs-img" src="../assets/docs-left.png" alt="Developer profile switcher">
      </div>
      <div class="w-1/2 py-16">
        <p class="title text-green">More than 100 docs to pick from.</p>
        <h3 class="text-4xl mb-4">Browse Documentation</h3>
        <p class="paragraph">
          Access documentations based on your selected languages, frameworks and tooling.
        </p>
        <p class="paragraph">
          Powered by <strong>DevDocs.io</strong>.
        </p>
      </div>
      <div class="w-1/4 ml-8 relative">
        <img class="absolute pin-l docs-img" src="../assets/docs-right.png" alt="Developer profile switcher">
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="sass">
.profile-switch-img
  box-shadow: 0 25px 40px 0 rgba(0,0,0,0.20)
  border-radius: 5px

.sources-img
  max-width: none

.docs-img
  max-width: none
</style>
