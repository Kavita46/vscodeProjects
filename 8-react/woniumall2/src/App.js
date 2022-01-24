import React, { Component } from 'react'
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login/Login.jsx';
import Main from './pages/Main';
import NoAuth from "@/pages/NoAuth.jsx";
// import 'antd/dist/antd.css';
import './App.less';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={Login}/>
          <Route path='/noauth' component={NoAuth}/>
          <Route path='/' component={Main}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

