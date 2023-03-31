import Vue from 'vue'
import VueRouter from 'vue-router'
<<<<<<< HEAD

import LandingPage from '../views/LandingPage.vue'
=======
import HomeView from '../views/HomeView.vue'
import SignIn from '../views/SignIn.vue'
>>>>>>> 944efbe9215b27b488d843ece1957069ba6bcfae

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
<<<<<<< HEAD
    name: 'LandingPage',
    component: LandingPage
=======
    name: 'home',
    component: HomeView
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
>>>>>>> 944efbe9215b27b488d843ece1957069ba6bcfae
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
