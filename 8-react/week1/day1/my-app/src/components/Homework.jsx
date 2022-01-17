import React, { Component } from "react";
// import { ContextExclusionPlugin } from "webpack";

export default class Homework extends Component {
  state = {
    students: [
      { id: 1, name: "刘备", age: 25, isStu: true },
      { id: 2, name: "关羽", age: 20, isStu: true },
      { id: 3, name: "张飞", age: 23, isStu: true },
      { id: 4, name: "周瑜", age: 33, isStu: false },
    ],
  };
  先试试箭头函数行不行;
  changeFlag = (e) => {
    // 这里的e指的是event 也就是事件
    console.log(e.target.dataset.id);
    let cid = e.target.dataset.id;
    console.log(typeof cid);
    this.setState({
      students: this.state.students.map((item) => {
        if (item.id.toString() === cid) {
          console.log(item.id.toString());
          item.isStu = !item.isStu;
          //   break;
        }
        return item;
      }),
    });
  };

  render() {
    // 一个jsx

    return this.state.students.map((item, index) => {
      return (
        // <tbody >
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.isStu ? "是" : "否"}</td>
            <td>
              {" "}
              <button onClick={this.changeFlag} data-id={item.id}>
                修改
              </button>
            </td>
          </tr>
        // </tbody>
      );
    });
  }
}
