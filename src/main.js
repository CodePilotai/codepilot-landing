import Vue from 'vue'
import App from './App.vue'
import '@/assets/styles/main.sass'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  mounted: () => document.dispatchEvent(new Event('x-app-rendered'))
}).$mount('#app')
