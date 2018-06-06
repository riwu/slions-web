import React from 'react';
import { connect } from 'react-redux';
import ClassForm from './ClassForm';
import ClassList from './ClassList';
import { updateClass } from '../actions';

const Classes = props => (
  <ClassForm label="Edit" okText="Save" onOk={props.updateClass}>
    {toggleModal => <ClassList toggleModal={toggleModal} />}
  </ClassForm>
);

export default connect(null, { updateClass })(Classes);
