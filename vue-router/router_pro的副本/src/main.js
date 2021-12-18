import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vuex from 'vuex'

Vue.config.productionTip = false

import api from './http/api'

Vue.prototype.api = api;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
