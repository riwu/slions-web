import React from 'react';
import { connect } from 'react-redux';
import { Menu, notification } from 'antd';
import { withRouter } from 'react-router-dom';
import Anchor from '../components/Anchor';
import { logOut } from '../actions';
import { AppLogo } from '../assets/images';
import styles from './Navigation.module.css';
import Login from '../components/Login';

const HomeNavigation = props => (
  <Menu
    mode="horizontal"
    defaultSelectedKeys={[window.location.pathname]}
    className={styles.container}
  >
    <AppLogo />

    <span className={styles.rightNav}>
      <Anchor href="https://wangriwu.com/Contact">Contact</Anchor>
      <div className={styles.navMargin}>
        <Login
          onLogin={() => {
            if ((props.location.state || {}).redirected) {
              props.history.goBack();
            } else {
              props.history.push('/classes');
            }
            notification.destroy();
          }}
        />
      </div>
    </span>
  </Menu>
);

export default connect(
  state => ({ username: state.user.username }),
  { logOut },
)(withRouter(HomeNavigation));
