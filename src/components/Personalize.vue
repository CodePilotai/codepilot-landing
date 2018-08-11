<template lang="html">
  <div class="bg-white">
    <div class="container mx-auto mt-32 px-4">
      <h2 class="header text-center">
        Personalize your results
      </h2>
      <div class="flex items-center py-8 md:py-32 flex-col md:flex-row">
        <div class="w-full md:w-2/5 text-right mr-32">
          <img class="profile-switch-img" src="../assets/profile-switch.png" alt="Developer profile switcher">
        </div>
        <div class="w-full md:w-3/5 pt-8">
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
  box-shadow: 0 25px 40px 0 rgba(0,0,0,0.20)
  border-radius: 5px
</style>
