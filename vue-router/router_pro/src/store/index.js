import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../http/axios.js'
import { STUDENTS } from '../http/const.js'

// 这里好像用不了this.api.所以引入了students 直接调用接口
import students from '../http/modules/students.js'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    students: [],
    stuList: [],
  },
  mutations: {
    // state对象, data传值
    CHANGE_STUDENTS(state, data) {
      state.students = data
    },
    // 通过commit 调用,来改变state里的stuList
    CHANGE_STULIST(state, data) {
      state.stuList = data
    }

  },
  actions: {
    // 在这里调用了后端,并从后端获得了数据,然后用commit 更改数据
    async getStudents(context) {
      let res = await axios({

        url: STUDENTS + '/getStudents',
        method: 'get'
      })
      context.commit('CHANGE_STUDENTS', res.result)

    },

    async getStuList(context) {
      let res = await axios({
        url: `/${STUDENTS}/getStudents`,
        method: 'get',
        params: data

      })
      context.commit('CHANGE_STULIST', res.result)
    }




  },
  modules: {
  },
  getters: {

    sum(state) {
      return state.money * state.age;
    }
  }
})



// state,
// mutation,
// actions,
// modules,
// getters,

