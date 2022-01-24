import React, { Component } from 'react'
import {Form, Input, Button, Checkbox, notification} from 'antd';
import styles from './login.module.less';
import { isEmpty } from '../../utils/common'
// import axios from "axios";
// import { storageSetItem, storageSetToken } from '@/utils/StorageUtil'
import StorageUtil from "../../utils/StorageUtil";
import { login } from '@/api/login';
import {passwordReg, usernameReg} from '@/utils/reg'

export default class Login extends Component {

    state = {
        isLoading: false
    }

    onFinish = (values) => {
        console.log('Success:', values);
        this.setState({
            isLoading: true
        })
        login(values).then(res => {
            console.log(res)
            const data = res.data;
            console.log(data)
            if (data.code === 0) {
                notification.error({
                    message: '失败',
                    description: data.msg
                });
            } else {
                StorageUtil.setToken(data.data.token);
                StorageUtil.setItem('userinfo', data.data.userInfo);
                notification.success({
                    message: '成功',
                    description:
                        '登录成功',
                });
                // localStorage.setItem('token', data.token);
                // localStorage.setItem('userinfo', JSON.stringify(data.userInfo));
                this.setState({
                    isLoading: false
                })
                this.props.history.push('/');
            }

        }).catch(err => {
            this.setState({
                isLoading: false
            })
        });
    };

    render() {
        return (
            <div className={styles['login-box']}>
                <div className={styles['login-form-box']}>
                    <img src={require('../../assets/images/logo.png')} width={'180px'} alt='图片' />

                    <Form
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={this.onFinish}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="用户名"
                            name="account"
                            required={true}
                            rules={[
                                // {
                                //     required: true,
                                //     message: '',
                                // },
                                // {
                                //     type: 'email',
                                //     message: '邮箱格式不正确'
                                // }
                                {
                                    validator: (_, value) => {
                                        if (isEmpty(value)) {
                                            // callback(new Error('请输入用户名'));
                                            return Promise.reject(new Error('请输入用户名'));
                                        } else {
                                            if (usernameReg.test(value)) {
                                                // callback();
                                                return Promise.resolve();
                                            } else {
                                                // callback(new Error('用户名格式不正确'));
                                                return Promise.reject(new Error('用户名格式不正确'));
                                            }
                                        }
                                    },
                                },
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

                        {/*<Form.Item*/}
                        {/*    name="remember"*/}
                        {/*    valuePropName="checked"*/}
                        {/*    wrapperCol={{*/}
                        {/*        offset: 8,*/}
                        {/*        span: 16,*/}
                        {/*    }}*/}
                        {/*>*/}
                        {/*    <Checkbox>记住我</Checkbox>*/}
                        {/*</Form.Item>*/}

                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit" loading={this.state.isLoading}>
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}
