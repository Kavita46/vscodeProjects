import React, { Component } from "react";
import { Form, Input, Button, Checkbox, notification } from "antd";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "./Login.css";
// import axios from "axios";
import axios from "@/utils/axios.js";
import StorageUtil from "@/utils/StorageUtil.js";
import {} from "../../utils/StorageUtil";

export default class Login extends Component {
  state = {
    isLoading: false,
  };

  onFinish = (values) => {
    console.log("Success:", values);
    this.setState({
      isLoading: true,
    });
    axios
      .post("/users/login", values)
      .then((res) => {
        const data = res.data.data;
        console.log(data.token);
        // 设置加载的参数
        if (data.code === 0) {
          notification.error({
            message: "失败",
            description: data.msg,
          });
        } else {
          StorageUtil.setToken(data.token);
          StorageUtil.setItem("userinfo", data.userInfo);
          notification.success({
            message: "成功",
            description: "登陆成功",
          });
          this.setState({
            isLoading: false,
          });
          this.props.history.push("/main");
        }
      })
      .catch((err) => {
        notification.error({
          message: "失败",
          description: "登录失败,请重新尝试",
        });
        this.setState({
          isLoading: false,
        });
      });
  };

  //     .finally(() => {
  //       console.log('跳转')
  //       this.props.history.push("/main");
  //     });
  // };

  login = async () => {
    console.log(this.state.currentUser);
    // let currentUser  = this.state.currentUser
    let res = await this.loginPost();
    console.log(res.data);
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  render() {
    return (
      <div id="loginBg">
        <div id="loginBox">
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="用户名"
              name="account"
              rules={[
                {
                  required: true,

                  pattern: new RegExp(
                    /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/
                  ),
                  message: "请输入用户名,必须是字母加数字",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="密码"
              name="password"
              rules={[
                {
                  required: true,
                  pattern: new RegExp(/^\d{6}$/, "g"),
                  message: "请输入六位数字密码!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{ offset: 8, span: 16 }}
            >
              <Checkbox>记住我</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                登录
              </Button>
              <Button type="primary" htmlType="submit">
                注册
              </Button>
            </Form.Item>
          </Form>
        </div>

        <Router>
          <Route
            path="/main"
            component={React.lazy(() => {
              import("../Main/Main");
            })}
          ></Route>
        </Router>
      </div>
    );
  }
}
