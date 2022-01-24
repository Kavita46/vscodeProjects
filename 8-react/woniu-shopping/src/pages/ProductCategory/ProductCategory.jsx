import React, {Component} from 'react';
import {Button, Card, Form, Input, Modal, notification, Pagination, Popconfirm, Select, Table} from "antd";
import {addCategroy, deleteCateGroy, findCategroy} from "@/api/productCategory";
import {usernameReg} from "@/utils/reg";

class ProductCategory extends Component {

    page = 1;
    pageSize = 10;

    constructor(props) {
        super(props);
        this.formRef = React.createRef();
    }

    state = {
        isLoading: false,
        isSubLoading: false,
        dataSource: [],
        dataSubSource: [],
        isShowSub: false, // 是否展示子类
        isModalVisible: false,
        confirmLoading: false,
        typeName: '', // 分类类型的值
        totalCount: 0,
        current: 1,
        pageSize: 10
    }

    columns = [{
        title: '分类名字',
        dataIndex: 'name',
        key: 'name'
    }, {
        title: '分类类型',
        dataIndex: 'type',
        key: 'type'
    }, {
        title: '操作',
        render: (text) => {
            return (
                <>
                    <Popconfirm
                        title="确认要删除吗?"
                        onConfirm={() => this.confirm(text)}
                        okText="确定"
                        cancelText="取消"
                    >
                        <Button type={'primary'}  style={{ marginRight: '10px' }}>删除</Button>
                    </Popconfirm>
                    <Button type={'primary'} onClick={() => this.handleViewSub(text._id)}>查看子类</Button>
                </>
            )
        }
    }]

    confirm = async (text) => {
        const res = await deleteCateGroy(text._id)
        if (res.data.code === 1) {
            notification.success({
                message: '成功',
                description: '删除成功'
            });
            this.setTableData();
        }
    }

    handleViewSub = (id) => {
        findCategroy({
            parentId: id,
            pageNumber: this.page,
            pageSize: this.pageSize
        }).then(res => {
            console.log(res)
            this.setState({
                dataSubSource: res.data.data.data
            })
        });
        this.setState({
            isShowSub: true
        })
    }

    handleBack = () => {
        this.setState({
            isShowSub: false,
            dataSubSource: []
        })
    }

    columnsSub = [{
        title: '分类名字',
        dataIndex: 'name',
        key: 'name'
    }, {
        title: '分类类型',
        dataIndex: 'type',
        key: 'type'
    }]

    componentDidMount() {
        this.setTableData();
    }

    setTableData = () => {
        findCategroy({
            parentId: 0,
            pageNumber: this.state.current,
            pageSize: this.state.pageSize
        }).then(res => {
            console.log(res)
            this.setState({
                dataSource: res.data.data.data,
                totalCount: res.data.data.totalCount
            })
        });
    }

    handleOk = () => {
        this.formRef.current.validateFields().then(values => {
            if (values.type === '一级分类') {
                values.parentId = 0;
            }
            this.setState({
                confirmLoading: true
            })
            return addCategroy(values)
        }).then(res => {
            notification.success({
                message: '成功',
                description: '添加成功'
            });
            this.setState({
                isModalVisible: false
            })
            this.setTableData();
        }).catch(() => {
            notification.error({
                message: '失败',
                description: '添加失败'
            })
        }).finally(() => {
            this.setState({
                confirmLoading: false
            })
        })
    }

    handleCancel = () => {
        this.setState({
            isModalVisible: false
        })
    }

    afterClose = () => {
        this.formRef.current.resetFields();
        this.setState({
            typeName: ''
        })
    }

    handleAdd = () => {
        this.setState({
            isModalVisible: true
        })
    }

    typeChange = (value) => {
        this.setState({
            typeName: value
        })
    }

    pageChange = (page, pageSize) => {
        console.log(page, pageSize)
        // this.page = page;
        // this.pageSize = pageSize;
        this.setState({
            current: page,
            pageSize
        }, () => {
            this.setTableData();
        })

    }

    render() {
        return (
            <Card title={'商品分类'} bordered={false}>
                {
                    this.state.isShowSub ? (
                        // 子类分类
                        <>
                            <div style={{ marginBottom: '10px' }}>
                                <Button type={'primary'} onClick={this.handleBack}>返回</Button>
                            </div>
                            <Table loading={this.state.isSubLoading} dataSource={this.state.dataSubSource} columns={this.columnsSub} rowKey={'_id'} />
                        </>
                    ) : (
                        // 父类
                        <React.Fragment>
                            <div style={{ marginBottom: '10px' }}>
                                <Button type={'primary'} onClick={this.handleAdd}>添加分类</Button>
                            </div>
                            <Table
                                loading={this.state.isLoading}
                                dataSource={this.state.dataSource}
                                columns={this.columns}
                                rowKey={'_id'}
                                pagination={false}
                            />
                            <div style={{paddingTop: '10px'}}>
                                <Pagination
                                    style={{ textAlign: 'center' }}
                                    current={this.state.current}
                                    pageSize={this.state.pageSize}
                                    onChange={this.pageChange}
                                    total={this.state.totalCount}
                                    showSizeChanger
                                    showQuickJumper
                                    showTotal={total => `共计 ${total} 条`}
                                />
                            </div>
                        </React.Fragment>
                    )
                }

                <Modal
                    title="添加用户"
                    visible={this.state.isModalVisible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    cancelText={'取消'}
                    okText={'确定'}
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
                            label="分类名称"
                            name="name"
                            rules={[
                                { required: true, message: '请输入用户名' }
                            ]}
                        >
                            <Input placeholder={'请输入用户名'} />
                        </Form.Item>
                        <Form.Item
                            label="分类类型"
                            name="type"
                            rules={[
                                { required: true, message: '请输入用户名' }
                            ]}
                        >
                            <Select placeholder={'请选择分类类型'} onChange={this.typeChange}>
                                <Select.Option value={'一级分类'}>一级分类</Select.Option>
                                <Select.Option value={'二级分类'}>二级分类</Select.Option>
                            </Select>
                        </Form.Item>
                        {
                            this.state.typeName === '二级分类' ? (
                                <Form.Item
                                    label="父类分类"
                                    name="parentId"
                                    rules={[
                                        { required: true, message: '请输入用户名' }
                                    ]}
                                >
                                    <Select placeholder={'请选择父类分类'}>
                                        {
                                            this.state.dataSource.map(item => (
                                                <Select.Option key={item._id} value={item._id}>{item.name}</Select.Option>
                                            ))
                                        }
                                    </Select>
                                </Form.Item>
                            ) : null
                        }

                    </Form>
                </Modal>
            </Card>
        );
    }
}

export default ProductCategory;
