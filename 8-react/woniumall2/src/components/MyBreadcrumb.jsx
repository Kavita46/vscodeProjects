import React, {Component} from 'react';
import {Breadcrumb} from "antd";
import { withRouter } from 'react-router-dom';

let pathMap = {
    '/user': '用户管理',
    '/': '首页',
    '/role': '角色管理',
    '/product': '商品管理',
    '/product/list': '商品列表',
    '/product/category': '商品分类'
}

let unlisten = null;

class MyBreadcrumb extends Component {

    state = {
        breadcrumbList: ['/product', ' /product/category']
    }

    componentDidMount() {
        this.setPath();
        unlisten = this.props.history.listen(() => {
            console.log(this.props)
            this.setPath();
        });

    }

    componentWillUnmount() {
        typeof unlisten === 'function' && unlisten();
    }

    setPath = () => {
        const pathname = this.props.history.location.pathname;

        // ['product', "category", 'list']
        // ['/product',' /product/category, '/product/category/list']
        const pathArr = pathname.split('/').slice(1);
        const newPathArr = pathArr.map((item, index) => {
            // ['product']  '/product'
            // ['product', "category"] '/product/category'
            return '/' + pathArr.slice(0, index + 1 ).join('/');
        })
        console.log(newPathArr)
        this.setState({
            breadcrumbList:newPathArr
        })
    }

    render() {
        const { breadcrumbName } = this.state;

        return (
            <Breadcrumb>
                {
                    this.state.breadcrumbList.map(item => {
                        return (
                            <Breadcrumb.Item key={item}>{pathMap[item]}</Breadcrumb.Item>
                        )
                    })
                }

                <Breadcrumb.Item>{breadcrumbName}</Breadcrumb.Item>
            </Breadcrumb>
        );
    }
}

export default withRouter(MyBreadcrumb);
