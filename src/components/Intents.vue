<template lang="html">
  <div class="container mx-auto mt-32">
    <div class="text-center">
      <h2 class="text-5xl mb-8 text-black font-bold">What are you looking for? Pick your intent.</h2>
      <button class="button button-primary" type="button" name="button">Code</button>
      <button class="button button-dark" type="button" name="button">Learn</button>
      <button class="button button-dark" type="button" name="button">Errors</button>
      <button class="button button-dark" type="button" name="button">Docs</button>
    </div>
    <div class="flex mt-12 items-center">
      <div class="w-2/5 text-left">
        <h2 class="text-black font-black text-5xl mb-4">Search for code,<br/> get real examples</h2>
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
          <img class="mr-4" src="../assets/github-logo.png" alt="GitHub logo">
          <img src="../assets/searchcode-logo.png" alt="GitHub logo">
        </div>
      </div>
      <div class="w-3/5 text-center">
        <img src="../assets/code-intent.jpg" alt="Code intent results">
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="sass">
</style>
