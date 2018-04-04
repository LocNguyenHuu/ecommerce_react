import React, { Component } from 'react'
import { withRouter, Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import Store from './components/Store'
import Cart from './components/User'
import User from './components/User'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        {/* DECLARING REACT ROUTES */}
        <Switch>
          <Route exact path="/" render={() => {
            return <Home />
          }} />
          <Route path="/store" render={() => {
            return <Store />
          }} />
          <Route path="/cart" render={() => {
            return <Cart />
          }} />
          <Route path="/profile" render={() => {
            return <User />
          }} />
        </Switch>

      </div>
    )
  }
}

export default withRouter(App)
