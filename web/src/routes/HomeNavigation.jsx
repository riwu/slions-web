import React from 'react';
import { connect } from 'react-redux';
import { Menu, Affix } from 'antd';
import Anchor from '../components/Anchor';
import { logOut } from '../actions';
import { AppLogo } from '../assets/images';
import styles from './Navigation.module.css';
import Login from '../components/Login';

const HomeNavigation = () => (
  <Affix>
    <Menu
      mode="horizontal"
      defaultSelectedKeys={[window.location.pathname]}
      className={styles.container}
    >
      <AppLogo />

      <span className={styles.rightNav}>
        <Anchor href="https://wangriwu.com/Contact">Contact</Anchor>
        <div className={styles.navMargin}>
          <Login />
        </div>
      </span>
    </Menu>
  </Affix>
);

export default connect(
  state => ({ username: state.user.username }),
  { logOut },
)(HomeNavigation);
