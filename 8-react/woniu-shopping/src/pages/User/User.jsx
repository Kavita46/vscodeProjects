import React, {Component} from 'react';
import {Button, Card, Form, Input, Modal, notification, Popconfirm, Select, Table} from "antd";
import {accountadd, delAccount, getAccountList} from "@/api/user";
import {findRoles} from "@/api/role";
import {passwordReg, usernameReg} from "@/utils/reg";



class User extends Component {

    state = {
        dataSource: [],
        isModalVisible: false,
        roleList: [],
        confirmLoading: false,
        isLoading: false
    }

    constructor(props) {
        super(props);
        this.formRef = React.createRef()
    }

    columns = [
        {
            title: '用户名',
            dataIndex: 'account',
            key: 'account',
        },
        {
            title: '邮箱地址',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: '用户角色',
            dataIndex: 'role',
            key: 'role',
            render: (text) => {
                return !!text ? text.name : '';
            }
        },
        {
            title: '操作',
            render: (text) => {
                return (
                    <Popconfirm
                        title="确认要删除吗?"
                        onConfirm={() => this.confirm(text)}
                        okText="确定"
                        cancelText="取消"
                    >
                        <Button type={'primary'}>删除</Button>
                    </Popconfirm>

                )
            }
        },
    ];

    confirm = (text) => {
        delAccount(text._id).then(res => {
            notification.success({
                message: '成功',
                description: '删除成功'
            });
            this.setTableData();
        })
    }

    componentDidMount() {
        this.setTableData();
        findRoles().then(res => {
            // console.log(res)
            this.setState({
                roleList: res.data.data
            })
        })
    }

    setTableData = () => {
        this.setState({
            isLoading: true
        })
        getAccountList().then(res => {
            // console.log(res)
            this.setState({
                dataSource: res.data.data
            })
        }).finally(() => {
            this.setState({
                isLoading: false
            })
        });
    }

    handleOk = () => {
        console.log(this.formRef)
        this.setState({
            confirmLoading: true
        })
        this.formRef.current.validateFields().then(values => {
            console.log(values)
            return accountadd(values)
        }).then(() => {
            this.setState({
                confirmLoading: false,
                isModalVisible: false
            });
            notification.success({
                message: '成功',
                description: '添加成功'
            });
            this.setTableData();
        })
    }

    handleCancel = () => {
        this.setState({
            isModalVisible: false
        });

    }

    handleAdd = () => {
        this.setState({
            isModalVisible: true
        })
    }

    afterClose = () => {
        this.formRef.current.resetFields();
    }

    render() {

        const { isModalVisible, roleList } = this.state;

        return (
            <Card title="用户管理" bordered={false}>
                <div style={{marginBottom: '20px'}}>
                    <Button type={'primary'} onClick={this.handleAdd}>添加用户</Button>
                </div>

                <Table loading={this.state.isLoading} dataSource={this.state.dataSource} columns={this.columns} rowKey={'_id'} />

                {/*添加弹窗*/}
                <Modal
                    title="添加用户"
                    visible={isModalVisible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    cancelText={'取消'}
                    okText={'确定'}
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
                            label="用户名字"
                            name="account"
                            rules={[
                                { required: true, message: '请输入用户名' },
                                { pattern: usernameReg, message: '用户名字格式不正确' }
                            ]}
                        >
                            <Input placeholder={'请输入用户名'} />
                        </Form.Item>

                        <Form.Item
                            label="密码"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入密码',
                                },
                                {
                                    pattern: passwordReg,
                                    message: '密码格式不正确'
                                }
                            ]}
                        >
                            <Input.Password placeholder={'请输入密码'} />
                        </Form.Item>
                        <Form.Item
                            label="角色名称"
                            name="role"
                            rules={[{ required: true, message: '请选择角色名称' }]}
                        >
                            <Select
                                placeholder="请选择角色名称"
                                allowClear
                            >
                                {
                                    roleList.map(item => (
                                        <Select.Option key={item._id} value={item._id}>{item.name}</Select.Option>
                                    ))
                                }
                            </Select>
                        </Form.Item>

                        <Form.Item
                            label="邮箱地址"
                            name="email"
                            rules={[
                                { required: true, message: '请输入邮箱' },
                                { type: 'email', message: '邮箱格式不正确' }
                            ]}
                        >
                            <Input placeholder={'请输入邮箱'} />
                        </Form.Item>
                    </Form>
                </Modal>
            </Card>
        );
    }
}

export default User;
