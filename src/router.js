import Vue from 'vue'
import Router from 'vue-router'
import Cv from './views/Cv.vue'
import About from './views/About.vue'
import Education from './views/Education.vue'
import Experience from './views/Experience.vue'
import Hobbies from './views/Hobbies.vue'
import Contact from './views/Contact.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Cv',
      component: Cv
    },
    {
      path: '/education',
      name: 'Education',
      component: Education
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/experience',
      name: 'Experience',
      component: Experience
    },
    {
      path: '/Hobbies',
      name: 'Hobbies',
      component: Hobbies
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
