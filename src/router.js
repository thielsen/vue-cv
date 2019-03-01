import Vue from 'vue'
import Router from 'vue-router'
import Cv from './views/Cv.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Cv',
      component: Cv
    }
  ]
})
