import Vue from 'vue'
import App from './App.vue'
import router from './router'
import cv from './assets/cv.yml'

console.log(cv)



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
