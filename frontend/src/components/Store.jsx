import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Store extends Component {
  render() {
    return (
      <div className="content">
        <h1>
          STORE
        </h1>
      </div>
    )
  }
}

export default withRouter(Store)