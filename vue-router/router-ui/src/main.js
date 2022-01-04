import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from '../src/http/api'

import myDirective from './directives/privilege'

import vueLazyload from 'vue-lazyload'



// import urlUtils from '../src/utils/urlUtil'

import urlUtil from '../src/utils/urlUtils'

Vue.prototype.api = api
Vue.prototype.$urlUtil= urlUtil
// import ElementUI from 'element-ui'

// // import 'element-ui/lib.theme-chalk/index.css'

// import '../node_modules/element-ui/lib/theme-chalk/index.css'

import './plugins/element.js'

Vue.use(vueLazyload, {
  // 配置默认图
  loading:require('../src/assets/loading.gif'),
  throttleWait:3000
  // 配置加载持续时间
})
Vue.config.productionTip = false
// Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
