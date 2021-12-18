import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vue from "vue";


// createApp(App).use(store).use(router).mount('#app')
createApp(App).use(store).use(router).mount('#app')


// import App from './App.vue';
// import router from "./router";
// new Vue({
//   router,
//   render: h => h(App)
// }).$mount("#app");