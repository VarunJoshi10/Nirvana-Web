import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import LoginView from '../views/Login.vue'
import HomePage from '../views/HomePage.vue'
import SignUpView from '../views/SignUp.vue'
import MyProfilePage from '../views/MyProfilePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/home',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/signUp',
    name: 'SignUpView',
    component: SignUpView
  },
  {
    path: '/myProfilePage',
    name: 'MyProfilePage',
    component: MyProfilePage
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
