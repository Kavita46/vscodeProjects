import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// import axios from './http/axios'

import api from './http/api'

// XXX 在Vue原型上新增加的自定义变量
// Vue.prototype.$axios = axios;
Vue.prototype.api = api;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
