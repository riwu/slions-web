import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { notification } from 'antd';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (isAuthenticated) return <Component {...props} />;
      notification.info({ message: 'Please login first!', placement: 'topLeft', duration: 0 });
      return (
        <Redirect
          push
          to={{
            pathname: '/',
            state: { redirected: true },
          }}
        />
      );
    }}
  />
);

export default connect(state => ({
  isAuthenticated: state.user.username,
}))(PrivateRoute);
