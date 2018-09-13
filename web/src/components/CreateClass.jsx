import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import ClassForm from './ClassForm';
import { createClass } from '../actions';

const CreateClass = props => (
  <ClassForm label="Create new class" okText="Create" onOk={props.createClass}>
    {toggleModal => (
      <Button className={props.className} type="primary" onClick={() => toggleModal()}>
        Create Class
      </Button>
    )}
  </ClassForm>
);

export default connect(
  null,
  { createClass },
)(CreateClass);
