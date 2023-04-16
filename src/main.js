import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { initializeApp } from "firebase/app";
import 'firebase/firestore';

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyDeqGpMHWXVsvTsVYmuJxCQFuK5rrGC63E",
    authDomain: "nirvana-a2fed.firebaseapp.com",
    databaseURL: "https://nirvana-a2fed-default-rtdb.firebaseio.com",
    projectId: "nirvana-a2fed",
    storageBucket: "nirvana-a2fed.appspot.com",
    messagingSenderId: "552986497814",
    appId: "1:552986497814:web:3bf6d8a30540c728777637"
}

const app = initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
