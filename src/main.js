import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

if ("serviceWorker" in navigator) {
  const swPath = process.env.VUE_APP_ASSETS_PATH + 'sw.js'
  navigator.serviceWorker.register(swPath)
  .catch(() => {})
}