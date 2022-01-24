import React, {Component} from 'react';
import {Redirect, Route} from "react-router-dom";
import StorageUtil from "@/utils/StorageUtil";
import { withRouter } from 'react-router-dom';

class WatchRoute extends Component {
    render() {
        const { path, component, ...restProps } = this.props;
        const pathname = this.props.history.location.pathname;

        if (StorageUtil.getItem('userinfo').role.menus.some(menu => menu === pathname)) {
            return (
                <Route path={path} component={component} {...restProps} />
            );
        } else {
            return <Redirect to={'/noauth'} />
        }

        // if (StorageUtil.getToken()) {
        //     return (
        //         <Route path={this.props.path} component={this.props.component} />
        //     );
        // } else {
        //     return <Redirect to={'/login'} />
        // }

    }
}

export default withRouter(WatchRoute);
