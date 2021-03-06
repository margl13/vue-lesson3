import Vue from 'vue'
import App from './App.vue'
import './vueresourse/index'
import router from "@/router";

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
