import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Form, Input, Button } from 'antd'
const FormItem = Form.Item

class User extends Component {
  state = {

  }

  newUser = (ev) => {
    console.log(ev.target)
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
        <Form>
          <FormItem
            // {...formItemLayout}
            label="E-mail">
            {getFieldDecorator('email', {
              rules: [
                {
                  type: 'email', 
                  message: 'This is not valid E-mail',
                }, 
                {
                  required: true, 
                  message: 'Please enter an E-mail!',
                }
              ],
            })(<Input />)}
          </FormItem>
          <FormItem
            // {...formItemLayout}
            label="Password">
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true, 
                  message: 'Please enter a password',
                }, 
                {
                validator: this.validateToNextPassword,
                }
              ]
            })(<Input type="password" />)}
          </FormItem>
          <FormItem
            // {...formItemLayout}
            label="Username">
            {getFieldDecorator('nickname', {
              rules: [
                { 
                  required: true, 
                  message: 'Please enter a username'
                }
              ]
            })(
              <Input />
            )}
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