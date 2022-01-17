import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import React, { Component } from 'react'
import Loadable from 'react-loadable'

import About from './Components/About'
import Users from './Components/Users'


const Home = Loadable({
  loader: () => import('./Components/Home.jsx'),
  loading: () => <div>加载中......</div>
})

export default class App extends Component {

  // Home(){
  //   return <h2>Home</h2>
  // }



  goPage = () => {
    console.log(this.props);
    this.props.history.push('/about/aboutDetail')
  }
  render() {
    return (

      <React.Suspense fallback={<div>加载中....</div>}>
        <Router>
          <div>
            <nav>
              <ul>
                {/* <li>
                <Redirect  to="/home" exact>Redirect</Redirect>
              </li> */}
                <li>
                  <Link to="/home">Home</Link>
                </li>
                {/* <li>
                <Link to="/about">About</Link>
              </li> */}
                <li>
                  <Link to="/users">users</Link>
                </li>
                <li>
                  <Link to={{ pathname: '/about' }} >About</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/about" component={About}>
              </Route>
              <Route path="/users">
                <Users />
              </Route>
              <Route path="/" component={Home}>
              </Route>

              <button onClick={this.goPage}>
                js点击跳转
              </button>

            </Switch>
          </div>
        </Router>

      </React.Suspense>
    )
  }
}