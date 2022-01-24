import './App.css';
import './App.less'
import { Button } from 'antd'
import Login from './pages/Login/Login'
import Main from './pages/Main/Main'
import { Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom'

function App() {
  return (

    <div>
      {/* // <Login></Login> */}
      {/* <Main></Main> */}

      <Router>
        <Switch>
          <Route path="/user/login" component={Login} >
          </Route>
          <Route path="/main" component={Main} >
          </Route>

          <Route path = "/" component = {Login}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
