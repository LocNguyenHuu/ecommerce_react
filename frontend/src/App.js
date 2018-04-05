import React, { Component } from 'react'
import { withRouter, Switch, Route } from 'react-router-dom'
import { Layout } from 'antd'
import styled from 'styled-components';

import Home from './components/Home'
import Store from './components/Store'
import Cart from './components/User'
import User from './components/User'
import Navbar from './components/Navbar'
import './App.css'

const Content = Layout

class App extends Component {
  render() {
    const Body = styled(Content)`
      padding: 0 5rem;
      margin-top: 20vh;
    `
    console.log(this.props)
    return (
      <Layout>
        <Navbar />
        {/* DECLARING REACT ROUTES */}
        <Body>
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
        </Body>
      </Layout>
    )
  }
}

export default withRouter(App)
