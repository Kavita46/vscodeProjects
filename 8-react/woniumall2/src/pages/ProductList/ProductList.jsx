import React, {Component} from 'react';
import {Button, Card, Form, Input, Modal, notification, Popconfirm, Select, Table, Tag} from 'antd';
import {addGoods, deleteGoods, findGoods, findGoodsByName, updateGoods} from "@/api/productLsit";
import {findCategroy} from "@/api/productCategory";
import {isEmpty} from "@/utils/common";
import UploadWall from '@/components/UploadWall'

class ProductList extends Component {

    constructor(props) {
        super(props);
        this.editFormRef = React.createRef();
        this.searchFormRef = React.createRef();
        this.addFormRef = React.createRef();
        this.uploadWallRef = React.createRef();
    }

    curHandleRow = {}

    state = {
        isLoading: false,
        dataSource: [],
        isModalVisible: false,
        confirmLoading: false,
        isModalSubVisible: false,
        confirmSubLoading: false,
        typeData: []
    }

    columns = [{
        title: '商品名字',
        dataIndex: 'name',
        key: 'name'
    }, {
        title: '商品描述',
        dataIndex: 'title',
        key: 'title'
    }, {
        title: '商品价格',
        dataIndex: 'price',
        key: 'price'
    }, {
        title: '商品类型',
        dataIndex: ['type', 'name'],
        key: 'type.name'
    }, {
        title: '商品状态',
        dataIndex: 'state',
        key: 'state',
        render: (text) => {
            if (text === 1) {
                return <Tag color="success">已上架</Tag>;
            } else if (text === 0) {
                return <Tag color="error">已下架</Tag>
            } else {
                return '';
            }
        }
    }, {
        title: '操作',
        width: '280px',
        render: (text) => {
            return (
                <>
                    <Button type={'primary'} onClick={() => this.handleEdit(text)} style={{ marginRight: '10px' }}>修改</Button>
                    <Popconfirm
                        title="确认要删除吗?"
                        onConfirm={() => this.confirm(text)}
                        okText="确定"
                        cancelText="取消"
                    >
                        <Button type={'primary'}  style={{ marginRight: '10px' }}>删除</Button>
                    </Popconfirm>
                    <Button type={'primary'}>详情</Button>
                </>
            )
        }
    }]

    confirm = (text) => {
        deleteGoods(text._id).then(res => {
            notification.success({
                message: '成功',
                description: '删除成功'
            });
            const formData = this.searchFormRef.current.getFieldsValue();
            this.searchData(formData);
        });
    }

    handleEdit = (text) => {
        this.curHandleRow = text;
        this.setState({
            isModalSubVisible: true
        }, () => {
            this.editFormRef.current.setFieldsValue({
                type: text.type._id,
                price: text.price
            });
        });
    }

    componentDidMount() {
        findCategroy({
            parentId: 0
        }).then(res => {
            this.setState({
                typeData: res.data.data.data
            })
        })
        findGoods().then(res => {
            console.log(res)
            this.setState({
                dataSource: res.data.data
            })
        })
    }

    handleOk = () => {
        this.addFormRef.current.validateFields().then(values => {
            // console.log(values)
            // console.log(this.uploadWallRef)
            if (this.uploadWallRef.current.validate()) {
                // addGoods(values);
                // console.log(this.uploadWallRef.current.getFilenames());
                addGoods({
                    ...values,
                    imgSrc: this.uploadWallRef.current.getFilenames()
                }).then(res => {
                    notification.success({
                        message: '成功',
                        description: '添加成功'
                    });
                    this.setState({
                        isModalVisible: false
                    })
                    const formData = this.searchFormRef.current.getFieldsValue();
                    this.searchData(formData);
                });
            } else {
                notification.warning({
                    message: '警告',
                    description: '请上传图片'
                })
            }
        })
    }

    handleCancel = () => {
        this.setState({
            isModalVisible: false
        })
    }

    afterClose = () => {
        this.addFormRef.current.resetFields();
        this.uploadWallRef.current.clear();
    }

    handleSubOk = () => {
        this.editFormRef.current.validateFields().then(values => {
            updateGoods({
                ...values,
                id: this.curHandleRow._id
            }).then(() => {
                notification.success({
                    message: '成功',
                    description: '修改成功'
                });
                this.setState({
                    isModalSubVisible: false
                });
                const formData = this.searchFormRef.current.getFieldsValue();
                // if (isEmpty(formData.searchData)) {
                //     formData.searchData = '';
                // }
                this.searchData(formData);
            });
        })
    }

    handleSubCancel = () => {
        this.setState({
            isModalSubVisible: false
        });
    }

    afterSubClose = () => {

    }

    handleAdd = () => {
        this.setState({
            isModalVisible: true
        })
    }

    onFinish = (values) => {
        console.log(values)
        // if (isEmpty(values.searchData)) {
        //     values.searchData = '';
        // }
        this.searchData(values);
    }

    // 根据条件查询数据
    searchData = (values) => {
        if (isEmpty(values.searchData)) {
            values.searchData = '';
        }
        findGoodsByName(values).then(res => {
            this.setState({
                dataSource: res.data.data
            })
        });
    }

    render() {
        return (
            <Card title={'商品列表'}>
                {/*<UploadWall />*/}
                <div style={{ marginBottom: '10px' }}>
                    <Form
                        layout={'inline'}
                        onFinish={this.onFinish}
                        autoComplete="off"
                        ref={this.searchFormRef}
                    >
                        <Form.Item initialValue={'name'} name={'searchType'} style={{ width: '150px' }}>
                            <Select>
                                <Select.Option value={'name'}>按名字查询</Select.Option>
                                <Select.Option value={'title'}>按描述查询</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item name={'searchData'}>
                            <Input placeholder={'请输入'} />
                        </Form.Item>
                        <Form.Item>
                            <Button type={'primary'} htmlType={'submit'} style={{ marginRight: '10px' }}>搜索</Button>
                            <Button type={'primary'} onClick={this.handleAdd}>添加</Button>
                        </Form.Item>
                    </Form>
                </div>

                <Table
                    loading={this.state.isLoading}
                    dataSource={this.state.dataSource}
                    columns={this.columns}
                    rowKey={'_id'}
                />

                {/*添加弹窗*/}
                <Modal
                    title="添加商品"
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
                        ref={this.addFormRef}
                    >
                        <Form.Item name={'name'} label={'商品名字'} rules={[{ required: true, message: '请输入商品名字' }]}>
                            <Input placeholder={'请输入商品名字'} />
                        </Form.Item>
                        <Form.Item name={'title'} label={'商品描述'} rules={[{ required: true, message: '请输入商品描述' }]}>
                            <Input.TextArea placeholder={'请输入商品描述'} />
                        </Form.Item>
                        <Form.Item
                            name={'price'}
                            label={'商品价格'}
                            rules={[
                                { required: true, message: '请输入商品价格' },
                                { pattern: /^\d+$/, message: '请输入数字' }
                            ]}>
                            <Input placeholder={'请输入商品价格'} />
                        </Form.Item>
                        <Form.Item name={'type'} label={'商品分类'} rules={[{ required: true, message: '请选择商品分类' }]}>
                            <Select placeholder={'请选择商品分类'}>
                                {
                                    this.state.typeData.map(item => {
                                        return (
                                            <Select.Option value={item._id} key={item._id}>{item.name}</Select.Option>
                                        )
                                    })
                                }
                            </Select>
                        </Form.Item>
                        <Form.Item label={'商品图片'} required={true}>
                            <UploadWall ref={this.uploadWallRef} />
                        </Form.Item>
                        <Form.Item name={'msg'} label={'商品详情'} rules={[{required: true, message: '请输入商品详情'}]}>
                            <Input.TextArea placeholder={'请输入商品详情'} />
                        </Form.Item>
                    </Form>
                </Modal>

                {/*编辑弹窗*/}
                <Modal
                    title="编辑商品"
                    visible={this.state.isModalSubVisible}
                    onOk={this.handleSubOk}
                    onCancel={this.handleSubCancel}
                    cancelText={'取消'}
                    okText={'确定'}
                    confirmLoading={this.state.confirmSubLoading}
                    afterClose={this.afterSubClose}
                >
                    <Form
                        ref={this.editFormRef}
                        labelCol={{ span: 5 }}
                        wrapperCol={{ span: 19 }}
                        autoComplete="off"
                    >
                        <Form.Item
                            name={'price'}
                            label={'商品价格'}
                            rules={[
                                { required: true, message: '请输入商品价格' },
                                { pattern: /^\d+$/, message: '请输入数字' }
                            ]}
                        >
                            <Input placeholder={'请输入商品价格'} />
                        </Form.Item>
                        <Form.Item
                            name={'type'}
                            label={'商品分类'}
                            rules={[{required: true, message: '请选择商品分类'}]}
                        >
                            <Select placeholder={'请选择商品分类'}>
                                {
                                    this.state.typeData.map(item => {
                                        return (
                                            <Select.Option value={item._id} key={item._id}>{item.name}</Select.Option>
                                        )
                                    })
                                }
                            </Select>
                        </Form.Item>
                    </Form>
                </Modal>
            </Card>
        );
    }
}

export default ProductList;
