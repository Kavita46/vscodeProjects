import React, {Component} from 'react';
import {Button, Card, Modal, notification, Table, Tree} from "antd";
import {addAuth, findRoles} from "@/api/role";
import moment from "moment";
import StorageUtil from "@/utils/StorageUtil";

const treeData = [
    {
        title: '首页',
        key: '/home'
    },
    {
        title: '用户',
        key: '/user'
    },
    {
        title: '角色',
        key: '/role',
    },
    {
        title: '商品信息',
        key: '/product',
        children: [{
            title: '商品列表',
            key: '/product/list',
        }, {
            title: '商品分类',
            key: '/product/category',
        }]
    },
    {
        title: '财务报表',
        key: '/chart',
        children: [{
            title: '财务信息',
            key: '/chart/bar',
        }, {
            title: '销售数据',
            key: '/chart/line',
        }, {
            title: '流水信息',
            key: '/chart/pie'
        }]
    }
];

class Role extends Component {

    state = {
        dataSource: [],
        isModalVisible: false,
        confirmLoading: false,
        expandedKeys: [],
        autoExpandParent: true,
        checkedKeys: [],
        selectedKeys: []
    }

    curHandleRow = {}

    columns = [{
        title: '角色名字',
        dataIndex: 'name',
        key: ''
    }, {
        title: '创建日期',
        dataIndex: 'createTime',
        key: 'createTime'
    }, {
        title: '授权人',
        dataIndex: 'authUser',
        key: 'authUser'
    }, {
        title: '授权日期',
        dataIndex: 'updateDate',
        key: 'updateDate'
    }, {
        title: '操作',
        render: (text) => {
            return (
                <>
                    <Button type={'primary'} style={{ marginRight: '10px' }}>删除</Button>
                    <Button type={'primary'} onClick={() => this.handleAuth(text)}>授权</Button>
                </>
            )
        }
    }]

    handleAuth = (text) => {
        this.curHandleRow = text;
        this.setState({
            isModalVisible: true,
            checkedKeys: text.menus
        })
    }

    setTableData = () => {
        findRoles().then(res => {
            console.log(res)
            this.setState({
                dataSource: res.data.data
            })
        });
    }

    componentDidMount() {
        this.setTableData();
    }

    handleOk = () => {
        // const authTime = new Date().toLocaleDateString().split('/').join('-');
        // const authTime = new Date().toLocaleDateString().replace(/\//g, '-');
        // const authTime = new Date().toLocaleDateString().replaceAll('/', '-');
        // console.log(authTime)
        const authTime = moment().format('YYYY-MM-DD');
        // console.log('moment:', moment().format('YYYY-MM-DD'))
        addAuth({
            id: this.curHandleRow._id,
            authTime,
            authUser: StorageUtil.getItem('userinfo').account,
            menus: this.state.checkedKeys
        }).then(res => {
            console.log(res);
            notification.success({
                message: '成功',
                description: '修改权限成功'
            });
            this.setTableData();
            this.setState({
                isModalVisible: false
            })
        });
    }

    handleCancel = () => {
        this.setState({
            isModalVisible: false
        })
    }

    afterClose = () => {

    }

    onExpand = (expandedKeysValue) => {
        console.log('onExpand', expandedKeysValue); // if not set autoExpandParent to false, if children expanded, parent can not collapse.
        // or, you can remove all expanded children keys.

        // setExpandedKeys(expandedKeysValue);
        this.setState({
            expandedKeys: expandedKeysValue,
            autoExpandParent: false
        })
        // setAutoExpandParent(false);
    };

    onCheck = (checkedKeysValue) => {
        console.log('onCheck', checkedKeysValue);
        // setCheckedKeys(checkedKeysValue);
        this.setState({
            checkedKeys: checkedKeysValue
        })
    };

    onSelect = (selectedKeysValue, info) => {
        console.log('onSelect', info);
        // setSelectedKeys(selectedKeysValue);
        this.setState({
            selectedKeys: selectedKeysValue
        })
    };

    render() {
        return (
            <Card title={'角色管理'} bordered={false}>
                <Button type={'primary'}>添加角色</Button>

                <Table dataSource={this.state.dataSource} columns={this.columns} rowKey={'_id'} />

                <Modal
                    title="编辑商品"
                    visible={this.state.isModalVisible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    cancelText={'取消'}
                    okText={'确定'}
                    confirmLoading={this.state.confirmLoading}
                    afterClose={this.afterClose}
                >
                    <Tree
                        checkable
                        onExpand={this.onExpand}
                        expandedKeys={this.state.expandedKeys}
                        autoExpandParent={this.state.autoExpandParent}
                        onCheck={this.onCheck}
                        checkedKeys={this.state.checkedKeys}
                        onSelect={this.onSelect}
                        selectedKeys={this.state.selectedKeys}
                        treeData={treeData}
                    />
                </Modal>
            </Card>
        );
    }
}

export default Role;
