import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Cart extends Component {
  render() {
    return (
      <div className="content">
        <h1>CART</h1>
      </div>
    )
  }
}

export default withRouter(Cart)