import Vue from 'vue'
import VueRouter from 'vue-router'
import Student from '../views/Student.vue'
import Teacher from '../views/Teacher.vue'
import Admin from '../views/Admin.vue'
import store from '../store/index.js'
import api from '../../src/http/api.js'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect: '/user/login'
  },
  // 1-学生端
  {
    path: '/student',
    component: Student,

    beforeEnter: (to, from, next) => {
      // reject the navigation
      // 身份不对,拒绝导航
      if (store.state.user.user) {
        console.log('仓库里的role是')
        let role = store.state.user.user.role
        console.log(role);
        if (role == 'student') { next(); } else {
          alert('当前用户不为学生,不能进入学生功能')
          router.push('/' )
        }
      }
      // return true
    },
    // 这个meta包含路由信息,用来做面包屑导航
    meta: {
      bread: [
        {
          path: '/student',
          title: '学生功能'
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
              title: '学生功能'
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
              title: '学生功能'
            },
            {
              path: '/student/stuUpdate',
              title: '个人信息'
            }
          ]
        }
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
        path: 'stuScore',
        component: () => import('../components/student/stuScore.vue'),
        meta: {
          bread: [
            {
              path: '/student',
              title: '学生功能'
            },
            {
              path: '/student/stuScore',
              title: '查看成绩'
            }
          ]
        }
      }, {
        path: 'allScore',
        component: () => import('../components/student/allScore.vue'),
        meta: {
          bread: [
            {
              path: '/student',
              title: '教师功能'
            },
            {
              path: '/student/stuScore',
              title: '所有成绩'
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
  // 2-教师端
  {
    path: '/teacher',
    component: Teacher,
    beforeEnter: (to, from, next) => {
      // reject the navigation
      // 身份不对,拒绝导航
      if (store.state.user.user) {
        let role = store.state.user.user.role
        if (role == 'teacher') { next(); } else {
          alert('当前用户不为老师,不能进入老师功能')
          router.push('/' )
        }
      }
    },
    meta: {},
    children: [
      {
        path: 'publishExam',
        component: () => import('../components/teacher/publishExam'),
        meta: {
          bread: [
            {
              path: '/teacher',
              title: '教师功能'
            },
            {
              path: '/teacher/publishExam',
              title: '发布考试'
            }
          ]
        }
      }, {
        path: 'stuList',
        component: () => import('../components/student/stuList.vue'),
        meta: {
          bread: [
            {
              path: '/teacher',
              title: '教师功能'
            },
            {
              path: '/teacher/stuList',
              title: '学生列表'
            }
          ]
        }
      },
      {
        path: 'allScore',
        component: () => import('../components/student/allScore.vue'),
        meta: {
          bread: [
            {
              path: '/teacher',
              title: '教师功能'
            },
            {
              path: '/teacher/allScore',
              title: '所有成绩'
            }
          ]
        }
      },
      {
        path: 'teacherUpdate',
        component: () => import('../components/teacher/teacherUpdate.vue'),
        meta: {
          bread: [
            {
              path: '/teacher',
              title: '教师功能'
            },
            {
              path: '/teacher/teacherUpdate',
              title: '个人信息'
            }
          ]
        }
      },
      {
        path: 'stuUpdate',
        component: () => import('../components/student/stuUpdate'),
        meta: {
          bread: [
            {
              path: '/teacher',
              title: '教师功能'
            },
            {
              path: '/teacher/stuList',
              title: '学生列表'
            },
            {
              path: '/teacher/stuUpdate',
              title: '查看学生信息'
            }
          ]
        }
      },

      {
        path: 'stuScore',
        component: () => import('../components/student/stuScore.vue'),
        meta: {
          bread: [
            {
              path: '/teacher',
              title: '教师功能'
            },
            {
              path: '/teacher/stuList',
              title: '学生列表'
            },
            {
              path: '/teacher/stuScore',
              title: '查看成绩'
            }
          ]
        }
      },

    ]
  },
  // 3-管理员端
  {
    path: '/admin',
    component: Admin,
    beforeEnter: (to, from, next) => {
      // reject the navigation
      // 身份不对,拒绝导航
      if (store.state.user.user) {
        let role = store.state.user.user.role
        if (role == 'admin') { next(); } else {
          alert('当前用户不为管理员,不能进入管理员功能')
          router.push('/' )
        }
      }
    },
    meta: {},
    children: [
      {
        path: 'academy',
        component: () => import('../components/admin/academy.vue'),
        meta: {
          bread: [
            {
              path: '/admin',
              title: '管理员功能'
            },
            {
              path: '/admin/academy',
              title: '学院管理'
            }
          ]
        }
      },
      {
        path: 'major',
        component: () => import('../components/admin/major.vue'),
        meta: {
          bread: [
            {
              path: '/admin',
              title: '管理员功能'
            },
            {
              path: '/admin/major',
              title: '专业管理'
            }
          ]
        }
      },
      {
        path: 'class',
        component: () => import('../components/class/classList.vue'),
        meta: {
          bread: [
            {
              path: '/admin',
              title: '管理员功能'
            },
            {
              path: '/admin/classes',
              title: '班级管理'
            }
          ]
        }
      },
      {
        path: 'student',
        component: () => import('../components/student/stuList.vue'),
        meta: {
          bread: [
            {
              path: '/admin',
              title: '管理员功能'
            },
            {
              path: '/admin/stuList',
              title: '学生管理'
            }
          ]
        }
      },
      {
        path: 'teacher',
        component: () => import('../components/admin/teacher.vue'),
        meta: {
          bread: [
            {
              path: '/admin',
              title: '管理员功能'
            },
            {
              path: '/admin/teacher',
              title: '教师管理'
            }
          ]
        }
      },
      {
        path: 'course',
        component: () => import('../components/admin/course.vue'),
        meta: {
          bread: [
            {
              path: '/admin',
              title: '管理员功能'
            },
            {
              path: '/admin/course',
              title: '课程管理'
            }
          ]
        }
      },
      {
        path: 'exam',
        component: () => import('../components/admin/exam.vue'),
        meta: {
          bread: [
            {
              path: '/admin',
              title: '管理员功能'
            },
            {
              path: '/admin/exam',
              title: '考试审核'
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
      // console.log('仓库里的role是')
      // console.log(store.state.user.user.role);
      next();
    } else {
      if (localStorage.token) {
        console.log('有token');
        let res = await api.users.getUserInfo();
        // console.log(res);
        // console.log(res.user);
        store.commit('user/CHANGE_USER', res.user)
      } else {
        router.push('/user/login')
      }
    }
  }
})

export default router
