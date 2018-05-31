import React from 'react';
import { connect } from 'react-redux';
import { Menu, Dropdown, Icon } from 'antd';
import { Link } from 'react-router-dom';

const ClassSelection = props => (
  <Dropdown
    overlay={
      <Menu>
        {Object.entries(props.classes).map(([id, data]) => (
          <Menu.Item key={id}>
            <Link to={`/classes/${id}`}>{data.title}</Link>
          </Menu.Item>
        ))}
      </Menu>
    }
  >
    <span>
      Change class <Icon type="down" />
    </span>
  </Dropdown>
);

export default connect(state => ({ classes: state.classes }))(ClassSelection);
