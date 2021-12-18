import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


import stu from '../components/stu.vue'
import stuList from '../components/stuList.vue'
import stuAdd from '../components/stuAdd.vue'
import notfound from '../components/notfound.vue'
import stuEdit from '../components/stuEdit.vue'

import login from '../components/login.vue'
import register from '../components/register.vue'
import demo from '../views/Demo.vue'

Vue.use(VueRouter)

const routes = [

  // 1-第一个是默认路由,端口号后面没有路由则跳转到设定的页面 home 里面
  {
    path: '/',
    // 重定向
    redirect: '/home'

  },
  // 2-组件路由

  {
    path: '/demo',
    component: demo,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  {
    path: '/stu',
    component: stu,

    children: [
      {
        path: '/stu/stuList/:id/:name',
        component: stuList,

        beforeEnter: ((to, from, next) => {

          if (localStorage.getItem('token')) {
            next();
          } else {
            alert('没有token,请登录')
            router.push('/home')
          }
        }),

        children: [
          {
            path: '/stu/stuList/stuEdit/',
            component: stuEdit
          }
        ]
      },

      {
        path: '/stu/stuAdd',
        component: stuAdd,
      },
      {
        path: '/stu/stuLogin',
        component: login
      },
      {
        path:'/stu/register',
        component:register
      }
    ]
  },

  // 通用路由, 就是不属于以上的路由

  {
    path: '*',
    component: notfound
  }


]

const router = new VueRouter({
  routes
});



// to 目标路由   from 原路由    next 
router.beforeEach((to, from, next) => {
  console.log(to);
  console.log(from);
  console.log(next);


  if (to.path.includes('/home')) {
    next()
  } else {
    if (localStorage.getItem('token')) {
      next()
    } else {
      alert('没有token')
      router.push('/home')
    }
  }
})


export default router
