import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// mount 的中文意思是挂载，也就是把一个组件挂载到一个元素上，这个元素就是挂载点。
