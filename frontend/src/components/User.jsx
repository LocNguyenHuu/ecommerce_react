import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Form, Input, Button } from 'antd'
import axios from 'axios'
const FormItem = Form.Item

class User extends Component {
  state = {
    confirmDirty: false,
    email: '',
    username: '',
    password: ''
  }

  // THIS NEEDS WORK. 
  // IT NEEDS TO PREVENT DEFAULT WHEN FORMS ARE NOT FILLED AND SUMBIT IF THEY ARE
  handleSubmit = (ev) => {
    ev.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  // FORM HANDLERS
  emailHandler = (ev) => {
    this.setState({
      email: ev.target.value
    })
  }

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

  // SUBMIT TO BACKEND
  newUser = () => {
    axios.post('http://localhost:6060/newUser', {
      email: this.state.email,
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

  // PASSWORD VALIDATION
  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  render() {
    const { getFieldDecorator } = this.props.form

    // const formItemLayout = {
    //   labelCol: {
    //     xs: { span: 24 },
    //     sm: { span: 8 },
    //   },
    //   wrapperCol: {
    //     xs: { span: 24 },
    //     sm: { span: 16 },
    //   },
    // }
    return (
      <div className="content">
        <Form onSubmit={this.handleSubmit}>
          <FormItem
            // {...formItemLayout}
            label="E-mail">
            {getFieldDecorator('email', {
              rules: [
                {
                  type: 'email', 
                  message: 'This is not valid E-mail'
                }, 
                {
                  required: true, 
                  message: 'Please enter an E-mail!'
                }
              ],
            })(<Input onChange={this.emailHandler} />)}
          </FormItem>
          <FormItem
            // {...formItemLayout}
            label="Username">
            {getFieldDecorator('username', {
              rules: [
                { 
                  required: true, 
                  message: 'Please enter a username'
                }
              ]
            })(<Input onChange={this.usernameHandler} />)}
          </FormItem>
          <FormItem
            // {...formItemLayout}
            label="Password">
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true, 
                  message: 'Please enter a password'
                }, 
                {
                  validator: this.validateToNextPassword
                }
              ]
            })(<Input type="password" onChange={this.passwordHandler} />)}
          </FormItem>
          <FormItem
            // {...formItemLayout}
            label="Confirm Password">
            {getFieldDecorator('confirm', {
              rules: [
                {
                  required: true, 
                  message: 'Please confirm your password'
                }, 
                {
                  validator: this.compareToFirstPassword
                }
              ],
            })(<Input type="password" onBlur={this.handleConfirmBlur} />)}
          </FormItem>
          <FormItem>
            <Button
              htmlType="submit"
              icon="rocket" 
              size='large' 
              onClick={this.newUser} 
              ghost>
              CREATE ACCOUNT
            </Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}

const SignUpForm = Form.create()(User)

export default withRouter(SignUpForm)