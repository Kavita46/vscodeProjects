import Vue from 'vue'
import VueRouter from 'vue-router'
import Student from '../views/Student.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/student'
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
              title: '学生添加'
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
    component:() => import('../components/user/update.vue')
  }

  // {
  //   path: '/student/stuUpd',
  //   name: 'stuUpd',
  //   component: () => import('../components/stuUpd.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
