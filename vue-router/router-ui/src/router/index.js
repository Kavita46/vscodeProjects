import Vue from 'vue'
import VueRouter from 'vue-router'
import Student from '../views/Student.vue'
import store from '../store/index.js'
import api from '../../src/http/api.js'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect: '/user/login'
  },
  {
    path: '/student',
    component: Student,
    // 这个meta包含路由信息,用来做面包屑导航
    meta: {
      bread: [
        {
          path: '/student',
          title: '学生管理'
        }]
    },
    children: [
      {
        path: 'stuList',
        component: () => import('../components/student/stuList.vue'),
        meta: {
          bread: [
            {
              path: '/student',
              title: '学生管理'
            },
            {
              path: '/student/stuList',
              title: '学生列表'
            }
          ]
        }
      },
      {
        path: 'stuUpdate',
        component: () => import('../components/student/stuUpdate.vue'),
        meta: {
          bread: [
            {
              path: '/student',
              title: '学生管理'
            },
            {
              path: '/student/stuUpdate',
              title: '学生修改'
            }
          ]
        }
      },
      {
        path: 'stuSync',
        component: () => import('../components/student/stuSync.vue')
      },
      {
        path: 'stuAdd',
        component: () => import('../components/student/stuAdd.vue'),
        meta: {
          bread: [
            {
              path: '/student',
              title: '学生管理'
            },
            {
              path: '/student/stuAdd',
              title: '添加学生'
            }
          ]
        }
      },
      {
        path: 'classList',
        component: () => import('../components/class/classList.vue'),
        meta: {
          bread: [
            {
              path: '/student',
              title: '班级管理'
            },
            {
              path: '/student/classList',
              title: '班级列表'
            }
          ]
        }
      },

      {
        path: 'classChart',
        component: () => import('../views/myChart.vue'),
        meta: {
          bread: [
            {
              path: '/student',
              title: '班级管理'
            },
            {
              path: '/student/classChart',
              title: '统计图表'
            }
          ]
        }
      }

    ]
  },
  {
    path: '/user/login',
    component: () => import('../components/user/login.vue')
  },
  {
    path: '/user/register',
    component: () => import('../components/user/register.vue')
  },
  {
    path: '/user/update',
    component: () => import('../components/user/update.vue')
  },
]

const router = new VueRouter({
  routes
})


// 放前置守卫, 引进store 和 api, 如果local 里 没有token 
router.beforeEach(async (to, from, next) => {

  console.log(to.path);

  if (to.path.includes('/login')) {
    next()
  } else {
    // 不放行
    if (store.state.user.user) {
      next();
    } else {
      if (localStorage.token) {
        console.log('有token');
        let res = await api.users.getUserInfo();
        console.log(res);
        console.log(res.user);
        store.commit('user/CHANGE_USER', res.user)
      } else {
        router.push('/user/login')
      }
    }


  }




})

export default router
