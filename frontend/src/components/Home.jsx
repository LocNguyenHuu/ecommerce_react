import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Form, Icon, Input, Button } from 'antd'
import axios from 'axios'

const FormItem = Form.Item

class Home extends Component {
  state = {
    username: '',
    password: ''
  }

  // FORM HANDLERS
  usernameHandler = (ev) => {
    this.setState({
      username: ev.target.value
    })
  }

  passwordHandler = (ev) => {
    this.setState({
      password: ev.target.value
    })
  }

  // SIGN IN
  userLogin = () => {
    axios.post('http://localhost:6060/login', {
      username: this.state.username,
      password: this.state.password
    })
    .then(function (response) {
      console.log(response)
    })
    .catch(function (error) {
      console.log(error)
    })
  } 

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div className="content">
        <Form>

          {/* LOG IN FORM */}
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [
                { 
                  required: true, 
                  message: 'Please input your username!' 
                }
              ],
            })(
              <Input 
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username" 
                onChange={this.usernameHandler}/>
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [
                { 
                  required: true, 
                  message: 'Please input your Password!' 
                }
              ],
            })(
              <Input 
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                type="password" 
                placeholder="Password" 
                onChange={this.passwordHandler}/>
            )}
          </FormItem>

          {/* BUTTONS */}
          <Button 
            onClick={this.userLogin} 
            icon="heart-o" 
            size='large' 
            ghost>LOG IN
          </Button>
          <Link to='/profile'>
          <Button icon="user-add" size='large' ghost>SIGN UP</Button>
          </Link>
        </Form>
      </div>
    )
  }
}

const LogInForm = Form.create()(Home)

export default withRouter(LogInForm)