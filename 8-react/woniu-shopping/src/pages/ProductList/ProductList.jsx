import React, { Component } from "react";
import {
  Popconfirm,
  Switch,
  Button,
  Card,
  Form,
  Input,
  Modal,
  Select,
  Table,
  Tag,
} from "antd";
import {
  deleteGoods,
  findGoods,
  addGoods,
  searchGoods,
} from "@/api/productLsit";
import { findCategroy } from "@/api/productCategory";
import UploadWall from "./UploadWall";
import axios from "@/utils/axios";
class ProductList extends Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
    this.formRefSearch = React.createRef();
  }

  state = {
    isLoading: false,
    dataSource: [],
    isModalVisible: false,
    confirmLoading: false,
    isModalSubVisible: false,
    confirmSubLoading: false,
    typeData: [],
    deleteCount: 0,
  };

  confirm = (text) => {
    console.log(text._id);
    deleteGoods({
      id: text._id,
    });

    findGoods().then((res) => {
        console.log(res);
        this.setState({
          dataSource: res.data.data,
        });
      });
  };

  //   handleDelete=(text)=>{
  //     console.log(text)
  //     // console.log('删除')
  //     this.setState({
  //         deleteCount:this.state.deleteCount+1,
  //     })
  //     console.log('删除执行了' + this.state.deleteCount + '次')

  // }

  columns = [
    {
      title: "商品名字",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "商品描述",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "商品价格",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "商品类型",
      dataIndex: ["type", "name"],
      key: "type.name",
    },
    {
      title: "商品状态",
      dataIndex: "state",
      key: "state",
      render: (text) => {
        if (text === 1) {
          return <Tag color="success">已上架</Tag>;
        } else if (text === 0) {
          return <Tag color="error">已下架</Tag>;
        } else {
          return "";
        }
      },
    },
    {
      title: "操作",
      width: "280px",
      render: (text) => {
        return (
          <>
            <Button
              type={"primary"}
              onClick={this.handleEdit}
              style={{ marginRight: "10px" }}
            >
              修改
            </Button>

            <Popconfirm
              title="确认要删除吗"
              onConfirm={() => this.confirm(text)}
              okText="确定"
              cancelText="取消"
            >
              <Button
                type={"primary"}
                // onClick={this.handleDelete(row)}
                style={{ marginRight: "10px" }}
              >
                删除
              </Button>
            </Popconfirm>

            <Button type={"primary"}>详情</Button>
          </>
        );
      },
    },
  ];

  handleEdit = () => {
    console.log("修改");
    this.setState({
      isModalSubVisible: true,
    });
  };

  componentDidMount() {
    findCategroy({
      parentId: 0,
    }).then((res) => {
      this.setState({
        typeData: res.data.data.data,
      });
    });
    findGoods().then((res) => {
      console.log(res);
      this.setState({
        dataSource: res.data.data,
      });
    });
  }

  // 新增模态框的按钮函数
  handleOk = () => {
    try {
      console.log("发请求");

      this.formRef.current.validateFields().then((values) => {
        console.log(values);
        return addGoods(values);
      });
    } catch {
      console.log("请求失败");
    }

    this.setState({
      isModalVisible: false,
    });
  };

  handleCancel = () => {
    this.setState({
      isModalVisible: false,
    });
  };

  afterClose = () => {
    this.setState({
      isModalVisible: false,
    });
  };

  handleSubOk = () => {
    this.setState({
      isModalSubVisible: false,
    });
  };

  handleSubCancel = () => {
    this.setState({
      isModalSubVisible: false,
    });
  };

  afterSubClose = () => {
    this.setState({
      isModalSubVisible: false,
    });
  };

  handleAdd = () => {
    this.setState({
      isModalVisible: true,
    });
  };

  //   接下来是搜索功能

  handleSearch = () => {
    console.log("搜索");
    this.formRefSearch.current
      .validateFields()
      .then((values) => {
        console.log(values);

        return searchGoods(values);
      })
      .then((res) => {
        console.log(res.data.data);
        this.setState({
          dataSource: res.data.data,
        });
      });
  };

  render() {
    return (
      <Card title={"商品列表"}>
        {/* 上传的照片墙组件 */}
        <UploadWall />
        <div style={{ marginBottom: "10px" }}>
          <Form layout={"inline"} autoComplete="off" ref={this.formRefSearch}>
            <Form.Item name="searchType" style={{ width: "150px" }}>
              <Select defaultValue={"name"}>
                <Select.Option value={"name"}>按名字查询</Select.Option>
                <Select.Option value={"title"}>按描述查询</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item name="searchData">
              <Input placeholder={"请输入"} />
            </Form.Item>
            <Form.Item>
              <Button
                type={"primary"}
                onClick={this.handleSearch}
                style={{ marginRight: "10px" }}
              >
                搜索
              </Button>
              <Button type={"primary"} onClick={this.handleAdd}>
                添加
              </Button>
            </Form.Item>
          </Form>
        </div>

        <Table
          loading={this.state.isLoading}
          dataSource={this.state.dataSource}
          columns={this.columns}
          rowKey={"_id"}
        />

        {/*添加弹窗*/}
        <Modal
          title="添加商品"
          visible={this.state.isModalVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          cancelText={"取消"}
          okText={"确定"}
          confirmLoading={this.state.confirmLoading}
          afterClose={this.afterClose}
        >
          <Form
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 19 }}
            autoComplete="off"
            ref={this.formRef}
          >
            <Form.Item
              name={"name"}
              label={"商品名字"}
              rules={[{ required: true, message: "请输入商品名字" }]}
            >
              <Input placeholder={"请输入商品名字"} />
            </Form.Item>
            <Form.Item
              name={"title"}
              label={"商品描述"}
              rules={[{ required: true, message: "请输入商品描述" }]}
            >
              <Input.TextArea placeholder={"请输入商品描述"} />
            </Form.Item>
            <Form.Item
              name={"price"}
              label={"商品价格"}
              rules={[
                { required: true, message: "请输入商品价格" },
                { pattern: /^\d+$/, message: "请输入数字" },
              ]}
            >
              <Input placeholder={"请输入商品价格"} />
            </Form.Item>
            <Form.Item
              name={"type"}
              label={"商品分类"}
              rules={[{ required: true, message: "请选择商品分类" }]}
            >
              <Select placeholder={"请选择商品分类"}>
                {this.state.typeData.map((item) => {
                  return (
                    <Select.Option value={item._id} key={item._id}>
                      {item.name}
                    </Select.Option>
                  );
                })}
              </Select>
            </Form.Item>
            <Form.Item name={"msg"} label={"商品详情"}>
              <Input.TextArea placeholder={"请输入商品详情"} />
            </Form.Item>
          </Form>
        </Modal>

        {/*编辑弹窗*/}
        <Modal
          title="编辑商品"
          visible={this.state.isModalSubVisible}
          onOk={this.handleSubOk}
          onCancel={this.handleSubCancel}
          cancelText={"取消"}
          okText={"确定"}
          confirmLoading={this.state.confirmSubLoading}
          afterClose={this.afterSubClose}
        >
          <Form
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 19 }}
            autoComplete="off"
          >
            <Form.Item label={"商品价格"}>
              <Input placeholder={"请输入商品价格"} />
            </Form.Item>
            <Form.Item label={"商品分类"}>
              <Select placeholder={"请选择商品分类"}>
                <Select.Option value={1}>电脑</Select.Option>
                <Select.Option value={2}>手机</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label={"是否上架"}>
              <Switch checkedChildren="上架" unCheckedChildren="下架" />
            </Form.Item>
          </Form>
        </Modal>
      </Card>
    );
  }
}

export default ProductList;
