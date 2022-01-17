import React, { Component } from "react";

class Test extends Component {
  // componentDidMount(){
  //     SetInterval(handler:()=>{})
  // }

  componentWillUnmount() {
    console.log("===componentWillUnmount");
  }
  state = {
    account: "",
    password: "",
  };

  changeAccount = (e) => {
    this.setState({
      account: e.target.value,
    });
  };

  changePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  render() {
    return (
      <div>
        账号: <input value={this.state.account} onChange={this.changeAccount} />
        <br />
        密码:{" "}
        <input value={this.state.password} onChange={this.changePassword} />
        <h1>Test卸载阶段</h1>
      </div>
    );
  }
}

export default Test;
