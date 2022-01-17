import React, { Component } from "react";
import Classes from "./Classes";
import Students from "./Students";
import Teachers from "./Teachers";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

export default class Home extends Component {
  goto = () => {
    this.props.history.push("/home/teachers");
  };

  gotoClasses = () => {
    this.props.history.push("/home/classes");
  };

  render() {
    return (
      <div>
        <h2>Home</h2>
        <Link to="/home/students">学生管理</Link>
        <Link to="/home/classes">班级管理</Link>
        <Link to="/home/teachers">教师管理</Link>

        <br />
        <br />

        <button onClick={this.goto}>Location跳转教师</button>
        <button onClick={this.gotoClasses}>去班级管理</button>
        <br />
        <br />

        <br />
        <br />
        <Switch>
          <Route path={"/home/students"} component={Students} />
          <Route path={"/home/classes"} component={Classes} />
          <Route path={"/home/teachers"} component={Teachers} />
        </Switch>
      </div>
    );
  }
}
