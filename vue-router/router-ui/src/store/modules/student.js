import axios from '../../http/axios.js'
// import { ContextExclusionPlugin } from 'webpack';
export default {

    // namespaced:true 一定要写，否则不能引用到其他模块的方法
    namespaced: true,
    state: {
        studentList: [],
        pageData: {
            pageSize: 5
        }
    },
    actions: {
        async getStudents(context) {
            let res = await axios({
                url: '/students/getStudents',
                method: 'get',
            })

            // 过滤得到flag = 1的学生
            let existStudents = res.result.filter(item => item.flag == 1);
            context.commit('CHANGE_STUDENTLIST', existStudents)
        },

        async getByPages(context, data) {
            let res = await axios({
                url: '/students/getByPages',
                method: 'get',
                params:
                {
                    pageIndex: data.pageIndex,
                    pageSize: data.pageSize,
                    k: data.k
                }
                //   let { pageIndex, pageSize, k } = req.query;
                // 需要传进来一个含有 pageIndex, pageSize, k 的对象
            })
            console.log("res是");
            console.log(res);
            context.commit('CHANGE_PAGEDATA', res)
        }
    },
    mutations: {
        CHANGE_STUDENTLIST(state, data) {
            state.studentList = data;
        },
        CHANGE_PAGEDATA(state, data) {
            state.pageData = data;
            console.log('调用了change_pagedata');
        }
    }

}