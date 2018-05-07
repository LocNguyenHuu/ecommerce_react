import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Home extends Component {

  render() {
    // const { getFieldDecorator } = this.props.form
    return (
      <div className="content">
        <h1>HOME</h1>
      </div>
    )
  }
}

export default withRouter(Home)