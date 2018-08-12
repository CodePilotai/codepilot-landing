<template>
  <div id="app">
    <DownloadForm :is-open="isDownloadFormOpen" @close="isDownloadFormOpen = false"/>
    <Nav/>
    <Hero @open-download="isDownloadFormOpen = true"/>
    <Intents/>
    <Filters/>
    <Personalize/>
    <CustomSources/>
    <Docs/>
    <FooterPane @open-download="isDownloadFormOpen = true"/>
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
import DownloadForm from './components/DownloadForm'

export default {
  name: 'App',
  components: {
    Hero,
    Nav,
    Intents,
    Filters,
    Personalize,
    FooterPane,
    Docs,
    CustomSources,
    DownloadForm
  },
  data () {
    return {
      isDownloadFormOpen: false
    }
  }
}
</script>

<style lang="sass">
#app
  font-family: 'Lato', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
</style>
