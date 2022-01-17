import React, { Component } from "react";

export default class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,

      title: "蜗牛学苑State",
      user: {
        name: "李四",
        age: 30,
      },
    };
  }

  increNum = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  decreNum = () => {
    this.setState({
      number: this.state.number - 1,
    });
  };

  changeTitle = () => {
    this.setState({
      title: "修改后的蜗牛学苑",
    });
  };

  changeName = () => {
    this.setState({
      user: {
        ...this.state.user,
        name: "修改后的姓名",
      },
    });
  };

  render() {
    return (
      <div>
        标题:{this.state.title}
        <br />
        姓名:{this.state.user.name}
        <br></br>
        年龄:{this.state.title}
        <br></br>
        <button onClick={this.changeTitle}>修改title</button>
        <div>
          购物数量
          <button onClick={this.decreNum}>-</button>
          <span>{this.state.number}</span>
          <button onClick={this.increNum}>+</button>
        </div>
      </div>
    );
  }
}
