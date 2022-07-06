// TODO 暂时不想放到仓库里
// import axios from '../../http/axios.js'
// // import { ContextExclusionPlugin } from 'webpack';
// export default {
//     // namespaced:true 一定要写，否则不能引用到其他模块的方法
//     namespaced: true,
//     state: {
//      classList:[]
//     },
//     actions: {
//         async getStudents(context) {
//             let res = await axios({
//                 url: '/students/getStudents',
//                 method: 'get',
//             })

//             // 过滤得到flag = 1的学生
//             let existStudents = res.result.filter(item => item.flag == 1);
//             context.commit('CHANGE_STUDENTLIST', existStudents)
//         },


//         async getClasses() {
//             try {
//                 let res = await this.api.classes.getClasses();
//                 console.log(res);
//                 this.classList = res.result;
//                 // console.log(this.classList);
//             } catch (e) {
//                 alert("class服务器异常");
//             }
//         }

//     },
//     mutations: {
//         CHANGE_STUDENTLIST(state, data) {
//             state.studentList = data;
//         },
//     }

// }