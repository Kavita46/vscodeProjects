import React, {Component} from 'react';
import {Menu} from "antd";
import { MailOutlined, PieChartOutlined, AppstoreOutlined, SettingOutlined, TeamOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined} from "@ant-design/icons";
import {Link, withRouter} from "react-router-dom";

const {SubMenu} = Menu;

class SideMenu extends Component {

    state = {
        selectedKeys: ['/'],
        openKeys: []
    }

    componentDidMount() {
        const pathname = this.props.history.location.pathname;
        console.log(pathname)
        const pathArr = pathname.split('/');
        const newPathArr = pathArr.slice(1, pathArr.length - 1);
        // ['product', 'category']
        // ['/product', '/product/category']
        console.log('pathArr:', pathArr);
        console.log("newPathArr:", newPathArr)
        const openKeys = newPathArr.map((item, index) => {
            return '/' + newPathArr.slice(0, index + 1).join('/');
        })
        console.log('openKeys', openKeys)
        this.setState({
            selectedKeys: [pathname],
            openKeys
        })
    }

    onSelect = ({ selectedKeys }) => {
        this.setState({
            selectedKeys
        })
    }

    onOpenChange = (openKeys) => {
        console.log(openKeys)
        this.setState({
            openKeys
        })
    }

    render() {
        return (
            <Menu
                theme="dark"
                mode="inline"
                selectedKeys={this.state.selectedKeys}
                onSelect={this.onSelect}
                openKeys={this.state.openKeys}
                onOpenChange={this.onOpenChange}
            >
                <Menu.Item key="/" icon={<UserOutlined />}>
                    <Link to={'/'}>首页</Link>
                </Menu.Item>
                <Menu.Item key="/user" icon={<VideoCameraOutlined />}>
                    <Link to={'/user'}>用户管理</Link>
                </Menu.Item>
                <Menu.Item key="/role" icon={<UploadOutlined />}>
                    <Link to={'/role'}>角色管理</Link>
                </Menu.Item>
                <Menu.SubMenu key="/product" icon={<TeamOutlined />} title="商品管理">
                    <Menu.Item key="/product/list">
                        <Link to={'/product/list'}>商品列表</Link>
                    </Menu.Item>
                    <Menu.Item key="/product/category">
                        <Link to={'/product/category'}>商品分类</Link>
                    </Menu.Item>
                </Menu.SubMenu>
                <SubMenu key="sub3" icon={<MailOutlined />} title="商品类别">
                        <Menu.Item key="6">分类模块</Menu.Item>
                        <Menu.Item key="7">添加分类</Menu.Item>
                     
                    </SubMenu>
                    <SubMenu key="sub4" icon={<MailOutlined />} title="统计列表">
                        <Menu.Item key="8">财报信息</Menu.Item>
                        <Menu.Item key="9">销售数据</Menu.Item>
                        <Menu.Item key="10">流水统计</Menu.Item>
                    </SubMenu>

            </Menu>
        );
    }
}

export default withRouter(SideMenu);
