import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'

import router from './routes.js'

Axios.defaults.baseURL = "https://cis410-fa20-neal-api2.azurewebsites.net"

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
