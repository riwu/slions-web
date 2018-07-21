import React from 'react';
import { Icon, Button } from 'antd';

const LoggedIn = props => (
  <div className={props.className}>
    <Button type="primary" onClick={() => props.history.push('/classes')}>
      Logged in as {props.username}
      <Icon type="right" />
    </Button>
  </div>
);

export default LoggedIn;
