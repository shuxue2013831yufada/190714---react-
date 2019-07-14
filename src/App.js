import React, {Component} from 'react'
import Admin from './pages/admin/admin'
import Login from './pages/login/login'
import {Route,Switch,BrowserRouter,HashRouter} from 'react-router-dom'

/*
应用根组件
 */
 export default class App extends Component {

  render() {
    return (
      <HashRouter>
          <Switch>
              <Route path='/login' component={Login}></Route>
              <Route path='/' component={Admin}></Route>
          </Switch>
      </HashRouter>
    )
  }
}



