import React from 'react';
import { connect } from 'react-redux';
import { Menu, Dropdown, Icon } from 'antd';
import { withRouter, Link } from 'react-router-dom';
import { logOut } from '../actions';
import styles from './LoggedNavigation.module.css';
import { LogoWhite } from '../assets/images';

const LoggedNavigation = props => (
  <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[window.location.pathname]}>
    <Menu.Item>
      <Link to="/">
        <LogoWhite />
      </Link>
    </Menu.Item>

    {[
      {
        link: 'classes',
        label: 'My classes',
      },
      {
        link: 'classes/joined',
        label: 'Joined classes',
      },
    ].map(menu => (
      <Menu.Item key={`/${menu.link}`}>
        <Link to={`/${menu.link}`}>{menu.label}</Link>
      </Menu.Item>
    ))}

    <div className={styles.rightNav}>
      <Dropdown
        overlay={
          <Menu>
            <Menu.Item
              onClick={() => {
                props.history.push('/');
                props.logOut();
              }}
            >
              Log out
            </Menu.Item>
          </Menu>
        }
      >
        <span>
          {`${props.username} `}
          <Icon type="down" />
        </span>
      </Dropdown>
    </div>
  </Menu>
);

export default connect(
  state => ({ username: state.user.username }),
  { logOut },
)(withRouter(LoggedNavigation));
