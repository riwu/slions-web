import React from 'react';
import { connect } from 'react-redux';
import { Menu, Affix } from 'antd';
import Anchor from '../components/Anchor';
import { logOut } from '../actions';
import { LogoPurple } from '../assets/images';
import styles from './HomeNavigation.module.css';
import Login from '../components/Login';

const HomeNavigation = () => (
  <Affix>
    <Menu
      mode="horizontal"
      defaultSelectedKeys={[window.location.pathname]}
      className={styles.container}
    >
      <span className={styles.header}>
        <LogoPurple />
        <span className={styles.title}>SLIONS</span>
      </span>
      <span className={styles.rightNav}>
        <Anchor href="https://wangriwu.com/Contact" rel="noopener">
          Contact
        </Anchor>
        <div className={styles.navMargin}>
          <Login showIfRedirected />
        </div>
      </span>
    </Menu>
  </Affix>
);

export default connect(
  state => ({ username: state.user.username }),
  { logOut },
)(HomeNavigation);
