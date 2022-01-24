import React, { Component, useState } from "react";
import {
  Button,
  Card,
  Form,
  Input,
  Modal,
  notification,
  Popconfirm,
  Select,
  Table,
} from "antd";
import { usernameReg, passwordReg } from "@/utils/reg";
import { findRoles, addAuth, addRoles, deleteRoles } from "@/api/role";

const treeData = [
  {
    title: "0-0",
    key: "0-0",
    children: [
      {
        title: "0-0-0",
        key: "0-0-0",
        children: [
          {
            title: "0-0-0-0",
            key: "0-0-0-0",
          },
          {
            title: "0-0-0-1",
            key: "0-0-0-1",
          },
          {
            title: "0-0-0-2",
            key: "0-0-0-2",
          },
        ],
      },
      {
        title: "0-0-1",
        key: "0-0-1",
        children: [
          {
            title: "0-0-1-0",
            key: "0-0-1-0",
          },
          {
            title: "0-0-1-1",
            key: "0-0-1-1",
          },
          {
            title: "0-0-1-2",
            key: "0-0-1-2",
          },
        ],
      },
      {
        title: "0-0-2",
        key: "0-0-2",
      },
    ],
  },
  {
    title: "0-1",
    key: "0-1",
    children: [
      {
        title: "0-1-0-0",
        key: "0-1-0-0",
      },
      {
        title: "0-1-0-1",
        key: "0-1-0-1",
      },
      {
        title: "0-1-0-2",
        key: "0-1-0-2",
      },
    ],
  },
  {
    title: "0-2",
    key: "0-2",
  },
];



class Role extends Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
  }

  //   Tree的函数
  onExpand = (expandedKeysValue) => {
    console.log("onExpand", expandedKeysValue); // if not set autoExpandParent to false, if children expanded, parent can not collapse.
    // or, you can remove all expanded children keys.

    setExpandedKeys(expandedKeysValue);
    setAutoExpandParent(false);
  };

  onCheck = (checkedKeysValue) => {
    console.log("onCheck", checkedKeysValue);
    setCheckedKeys(checkedKeysValue);
  };

  onSelect = (selectedKeysValue, info) => {
    console.log("onSelect", info);
    setSelectedKeys(selectedKeysValue);
  };

  //   Tree的函数




  state = {
    roleList: [],
    isModalVisible: false,
    isLoading: false,
    expandedKeys:["0-0-0", "0-0-1"],
    autoExpandParent: true,
    checkedKeys: ["0-0-0"],
    selectedKeys:[]
  };

  columns = [
    {
      title: "角色名字",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "创建日期",
      dataIndex: "createTime",
      key: "createTime",
    },
    {
      title: "授权人",
      dataIndex: "authUser",
      key: "authUser",
    },
    {
      title: "授权日期",
      dataIndex: "authTime",
      key: "authTime",
    },
    {
      title: "操作",
      render: (text) => {
        return (
          <>
            <Popconfirm
              title="确认要删除吗?"
              onConfirm={() => this.confirm(text)}
              okText="确定"
              cancelText="取消"
            >
              <Button onClick={this.handleDelete} type={"primary"}>
                删除
              </Button>
            </Popconfirm>

            <Button onClick={this.handleAuth} type={"primary"}>
              {" "}
              授权
            </Button>

            <Tree
              checkable
              onExpand={onExpand}
              expandedKeys={this.state.expandedKeys}
              autoExpandParent={this.state.autoExpandParent}
              onCheck={onCheck}
              checkedKeys={this.state.checkedKeys}
              onSelect={onSelect}
              selectedKeys={this.state.selectedKeys}
              treeData={this.treeData}
            />
          </>
        );
      },
    },
  ];

  confirm = (text) => {
    console.log(text._id);

    return deleteRoles({ id: text._id })
      .then((res) => {
        console.log(res);
      })
      .then(() => {
        this.getRoles();
      });
  };

  handleAdd = () => {
    this.setState({
      isModalVisible: true,
    });
    console.log(this.state.isModalVisible);
  };

  handleAuth = () => {
    // id, authTime, authUser, menus
  };

  handleOk = () => {
    let currentDate = new Date();

    let createTime = new Date().toLocaleDateString().split("/").join("-");
    console.log(createTime);
    this.formRef.current
      .validateFields()
      .then((values) => {
        console.log(values);
        let data = {
          name: values.name,
          createTime: createTime,
        };
        return addRoles(data);
      })
      .then(() => {
        this.setState({
          isModalVisible: false,
        });
      })
      .then(() => {
        this.getRoles();
      });
  };

  handleCancel = () => {
    this.setState({
      isModalVisible: false,
    });
  };

  getRoles = () => {
    findRoles().then((res) => {
      // console.log(res)
      this.setState({
        roleList: res.data.data,
      });
      console.log(this.state.roleList);
    });
  };

  componentDidMount() {
    this.getRoles();
  }

  render() {
    return (
      <Card title="角色管理" bordered={false}>
        <div style={{ marginBottom: "20px" }}>
          <Button type={"primary"} onClick={this.handleAdd}>
            添加角色
          </Button>
        </div>

        <Table
          loading={this.state.isLoading}
          dataSource={this.state.roleList}
          columns={this.columns}
          rowKey={"_id"}
        />

        {/*添加弹窗*/}
        <Modal
          title="添加角色"
          visible={this.state.isModalVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          cancelText={"取消"}
          okText={"确定"}
          confirmLoading={this.state.confirmLoading}
          afterClose={this.afterClose}
        >
          <Form
            name="basic"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 19 }}
            autoComplete="off"
            ref={this.formRef}
          >
            <Form.Item
              label="角色名字"
              name="name"
              rules={[
                { required: true, message: "请输入角色名字" },
                // { pattern: usernameReg, message: "用户名字格式不正确" },
              ]}
            >
              <Input placeholder={"请输入角色名字"} />
            </Form.Item>

            {/* <Form.Item
              label="密码"
              name="password"
              rules={[
                {
                  required: true,
                  message: "请输入密码",
                },
                {
                  pattern: passwordReg,
                  message: "密码格式不正确",
                },
              ]}
            >
              <Input.Password placeholder={"请输入密码"} />
            </Form.Item>
            <Form.Item
              label="角色名称"
              name="role"
              rules={[{ required: true, message: "请选择角色名称" }]}
            >
              <Select placeholder="请选择角色名称" allowClear>
                {
                  // this.roleList.map(item => (
                  //     <Select.Option key={item._id} value={item._id}>{item.name}</Select.Option>
                  // ))
                }
              </Select>
            </Form.Item>

            <Form.Item
              label="邮箱地址"
              name="email"
              rules={[
                { required: true, message: "请输入邮箱" },
                { type: "email", message: "邮箱格式不正确" },
              ]}
            >
              <Input placeholder={"请输入邮箱"} />
            </Form.Item> */}
          </Form>
        </Modal>
      </Card>
    );
  }
}

export default Role;
