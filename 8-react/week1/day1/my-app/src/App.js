// import React, { Component } from 'react'
// import Account from './components/Account.jsx';
// import Password from './components/Password.jsx';
// import List from './components/List.jsx';
// import Images from './components/Images.jsx';
// import Test from './components/Test.jsx';
// import State from './components/State.jsx';

// import Fun1 from './components/Fun1.jsx';
// // import image from '../assets/images/1.jpg';
// import image from './assets/images/1.png';


// export default class App extends Component {
//     render() {
//         let user = {
//             title: '蜗牛标题',
//             // name: '张三',
//             age: 20
//         }
//         return (
//             <div>
//                 {/* <Account/>
//                 <Password/>
//                 <div>
//                     <Test title='蜗牛学苑默认标题' name ='林冲' {...user} />
//                 </div> */}
//                 {/* <img src={Images} /> */}
//                 {/* <Fun1></Fun1>
//                 <Images></Images> */}

//                 <table>
//                     <thead>
//                         <tr>
//                             <th>编号</th>
//                             <th>姓名</th>
//                             <th>年龄</th>
//                             <th>是否学生</th>
//                             <th>操作</th>
//                         </tr>
//                     </thead>
//                     <Homework></Homework>
//                 </table>


//             </div>
//         )
//     }
// }

import React, { Component } from 'react'
import Homework from './components/Homework.jsx';
export default class App extends Component {
    render() {
        return (<div>
            <table style = {{border:'1px'}}>
                <thead>
                    <tr>
                        <th>编号</th>
                        <th>姓名</th>
                        <th>年龄</th>
                        <th>是否学生</th>
                        <th>操作</th>
                    </tr>
                </thead>

                <tbody>
                <Homework></Homework>

                </tbody>
           
            </table>
        </div>)
    }
}