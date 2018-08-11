<template>
  <div id="app" class="parallax">
    <Nav/>
    <Hero/>
    <Intents/>
    <Filters/>
    <Personalize/>
    <CustomSources/>
    <Docs/>
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
import Docs from './components/Docs.vue'
import CustomSources from './components/CustomSources.vue'

export default {
  name: 'app',
  components: {
    Hero,
    Nav,
    Intents,
    Filters,
    Personalize,
    FooterPane,
    Docs,
    CustomSources
  }
}
</script>

<style lang="sass">
#app
  font-family: 'Lato', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale

@media (min-width: 768px)
  .parallax
    position: relative
    height: 100vh
    overflow-x: hidden
    overflow-y: auto
    perspective: 2px
    -webkit-overflow-scrolling: touch
    scroll-behavior: smooth
</style>
