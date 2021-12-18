import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    // name: 'Home',
    component: Home
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
