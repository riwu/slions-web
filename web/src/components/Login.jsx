import React from 'react';
import { connect } from 'react-redux';
import { Form, Icon, Input, Button, notification } from 'antd';
import { login } from '../actions';

class Login extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (err) {
        console.log('err', err);
        return;
      }
      console.log('Received values of form: ', values);
      this.props
        .login(values.username, values.password)
        .then(this.props.onLogin)
        .catch((error) => {
          if (((error || {}).response || {}).status === 401) {
            notification.error({ message: 'Username or password is wrong', placement: 'topLeft' });
          } else {
            notification.error({
              message: 'Failed to login',
              description: error.message,
              placement: 'topLeft',
            });
          }
          throw error; // throw even when 401 so that promise is rejected
        });
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form layout="inline" onSubmit={this.handleSubmit} className={this.props.className}>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(<Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Username"
          />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(<Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
          />)}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default connect(
  null,
  { login },
)(Form.create()(Login));
