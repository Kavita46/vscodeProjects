import React, { Component } from 'react'

export default class List extends Component

{
    render(){
        let list = ['张飞','刘备','关羽']

        return (<ul>
{
    list.map((item)=>{
        return <li key={item}>{item}</li>
    })
}

        </ul>)
    }
}

// export default class List extends Component {
//     render() {
//         let list = ['张三', '李四', '王五']

//         return (
//             <ul>
//                 {
//                     list.map(item => <li key={item}>{ item }</li>)
//                 }
//             </ul>
//         )
//     }
// }