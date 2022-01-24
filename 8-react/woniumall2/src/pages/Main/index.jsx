import React, { Component } from 'react'
import {Breadcrumb, Button, Layout, Menu} from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined, TeamOutlined } from '@ant-design/icons';
import styles from './index.module.less';
import {Link, Redirect, Route, Switch} from "react-router-dom";
import Home from "../Home/Home";
import User from "../User/User";
import Role from "../Role/Role";
import ProductList from "../ProductList/ProductList";
import ProductCategory from "../ProductCategory/ProductCategory";
import StorageUtil from "../../utils/StorageUtil";
import MyBreadcrumb from "@/components/MyBreadcrumb.jsx";
import SideMenu from "@/components/SideMenu/SideMenu.jsx";
import WatchRoute from '@/components/WatchRoute'

const { Header, Content, Footer, Sider } = Layout;

export default class Main extends Component {

    state = {
        username: ''
    }

    componentDidMount() {
        const userinfo = StorageUtil.getItem('userinfo');
        this.setState({
            username: userinfo.role.name
        })
    }

    render() {
        return (
            <Layout style={{ height: '100vh' }}>
                <Sider
                    breakpoint="lg"
                    // collapsedWidth="0"
                    onBreakpoint={broken => {
                        console.log(broken);
                    }}
                    // onCollapse={(collapsed, type) => {
                    //     console.log(collapsed, type);
                    // }}
                >
                    <img src={require('@/assets/images/logo.png')} width={'140px'} style={{ margin: '0 auto', padding: '20px 0', display: 'block' }} alt={'图片'} />
                    <SideMenu />
                </Sider>
                <Layout>
                    <Header className="site-layout-sub-header-background" style={{ padding: 0, color: 'white' }}>
                        <ul className={styles['header-box']}>
                            <li>欢迎【{this.state.username}】登录</li>
                            <li>
                                <Button type={'link'}>退出登录</Button>
                            </li>
                        </ul>
                    </Header>
                    <Content style={{ margin: '24px 16px 10px 16px', overflowY: 'auto' }}>
                        <div style={{ padding: '10px 0 10px 10px', backgroundColor: 'white' }}>
                            <MyBreadcrumb/>
                        </div>
                        <div className="site-layout-background" style={{ paddingTop: '20px', minHeight: 360 }}>

                            <Switch>
                                <WatchRoute path={'/home'} component={Home} exact={true} />
                                {/*<Route path={'/user'} component={User} />*/}
                                <WatchRoute path={'/user'} component={User} />
                                <WatchRoute path={'/role'} component={Role} />
                                <WatchRoute path={'/product/list'} component={ProductList} />
                                <WatchRoute path={'/product/category'} component={ProductCategory} />
                            </Switch>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center', backgroundColor: 'white' }}>蜗牛创想出品</Footer>
                </Layout>
            </Layout>
        )
    }
}
