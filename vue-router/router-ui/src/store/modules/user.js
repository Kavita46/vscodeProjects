import axios from '../../http/axios.js'
// import { ContextExclusionPlugin } from 'webpack';
import createPersistedState from 'vuex-persistedstate'
export default {
    // namespaced:true 一定要写，否则不能引用到其他模块的方法
    namespaced: true,
    state: {
        user: {
        },
        role: ""
    },
    actions: {
        async getStudents(context) {
        },
    },
    mutations: {
        CHANGE_USER(state, data) {
            state.user = data;
        }, CHANGE_ROLE(state, data) {
            state.role = data;
            console.log('调用了changeRole')
        },
    }
    ,
    // plugins: [createPersistedState()]

}