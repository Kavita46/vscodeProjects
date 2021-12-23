import Vue from 'vue'
import Vuex from 'vuex'
import student from './modules/student'
import user from './modules/user.js'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)
const store  = 
 new Vuex.Store({
  // namespaced: true,
  state: {
    count: 0
  },
  mutations: {

    INCREMENT_COUNT(state) {
      state.count++
    },

    DECREMENT_COUNT(state) {
      state.count--
    }
    ,
    increment: state => state.count++,
    decrement: state => state.count--
  },
  actions: {
  },
  modules: {
    student,
    user
  },

  plugins: [createPersistedState()]
})


export default store;
