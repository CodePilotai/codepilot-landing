<template lang="html">
  <div class="bg-white">
    <div class="container mx-auto mt-32 px-4">
      <h2 class="header text-center">
        Personalize your results
      </h2>
      <div class="flex items-center py-8 md:py-32 flex-col md:flex-row">
        <div class="w-full md:w-3/5 -ml-8">
          <img class="profile-switch-img mr-32" src="../assets/dev-profile.png" alt="Developer profile">
        </div>
        <div class="w-full md:w-2/5 pt-8">
          <img class="mb-2" src="../assets/case-icon.svg">
          <p class="title text-indigo">Personalize your experience.</p>
          <h3 class="header">Create Developer Profiles</h3>
          <p class="paragraph">
            Create Developer Profiles based on the projects you’re working on. Our <strong>ML-powered Ranker</strong> will analyze and rank the results based on relevancy for your current profile.
          </p>
          <p class="paragraph">
            Get results for technologies and tools that match your current project.
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
.profile-switch-img
  max-width: none
  margin-left: -8px
</style>
