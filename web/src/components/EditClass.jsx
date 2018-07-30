import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import ClassForm from './ClassForm';
import { updateClass } from '../actions';
import Share from './Share';

const Classes = props => (
  <ClassForm label="Edit" okText="Save" onOk={props.updateClass} Share={Share}>
    {toggleModal => (
      <Button type="primary" className={props.className} onClick={() => toggleModal(props.class)}>
        Edit
      </Button>
    )}
  </ClassForm>
);

export default connect(
  null,
  { updateClass },
)(Classes);
