<template>
  <div id="app" class="">
    <Nav/>
    <Hero/>
    <Intents/>
    <Filters/>
    <Personalize/>
    <FooterPane/>
  </div>
</template>

<script>
import Hero from './components/Hero.vue'
import Nav from './components/Nav.vue'
import Intents from './components/Intents.vue'
import Filters from './components/Filters.vue'
import Personalize from './components/Personalize.vue'
import FooterPane from './components/FooterPane.vue'

export default {
  name: 'app',
  components: {
    Hero,
    Nav,
    Intents,
    Filters,
    Personalize,
    FooterPane
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
