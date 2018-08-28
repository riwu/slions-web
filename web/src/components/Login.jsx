import React from 'react';
import { connect } from 'react-redux';
import { Form, Icon, Input, Button, notification, Modal } from 'antd';
import { login } from '../actions';

class Login extends React.Component {
  state = {
    modalVisible: false,
  };
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
          console.log('err', error);
          const isUnauthenticated = ((error || {}).response || {}).status === 401;
          notification.error({
            message: isUnauthenticated ? 'Username or password is wrong' : 'Failed to login',
            description: !isUnauthenticated && error.message,
            placement: 'topLeft',
          });
        });
    });
  };
  render() {
    const { props } = this;
    const { getFieldDecorator } = props.form;
    return (
      <React.Fragment>
        <Button
          type="primary"
          onClick={() => {
            if (props.username) {
              props.onLogin();
            } else {
              this.setState({ modalVisible: true });
            }
          }}
        >
          {props.username ? (
            <React.Fragment>
              Signed in as {props.username} <Icon type="right" />
            </React.Fragment>
          ) : (
            'Sign In'
          )}
        </Button>
        <Modal
          title="Sign In"
          visible={this.state.modalVisible}
          onOk={this.handleSubmit}
          okText="Sign In"
          onCancel={() => this.setState({ modalVisible: false })}
          hideRequiredMark
        >
          <Form className={props.className}>
            <Form.Item label="Username">
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(<Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Enter your username"
              />)}
            </Form.Item>
            <Form.Item label="Password">
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your password!' }],
              })(<Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Enter your password"
              />)}
            </Form.Item>
          </Form>
        </Modal>
      </React.Fragment>
    );
  }
}

export default connect(
  state => ({ username: state.user.username }),
  { login },
)(Form.create()(Login));
