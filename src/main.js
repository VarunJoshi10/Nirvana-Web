import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

Vue.config.productionTip = false

const firebaseConfig = {
  // your config
}

const app = initializeApp(firebaseConfig);
export const db = getFirestore()

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
