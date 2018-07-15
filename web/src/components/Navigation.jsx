import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[window.location.pathname]}>
    {[
      {
        link: 'classes',
        label: 'My Classes',
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
  </Menu>
);

export default Navigation;
