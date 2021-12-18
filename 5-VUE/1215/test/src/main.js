import { createApp } from 'vue'
import App from './App.vue'
import Vue from 'vue'

import Element from 'element-plus'



import 'element-plus/dist/index.css'

// api 挂载全局
import api from './http/api.js'
Vue.prototype.api=api;

const app = createApp(App);
app.use(Element);
app.mount('#app');
// createApp(App).mount('#app')
