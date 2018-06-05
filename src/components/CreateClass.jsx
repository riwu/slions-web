import React from 'react';
import { connect } from 'react-redux';
import ClassForm from './ClassForm';
import { createClass } from '../actions';

const CreateClass = props => (
  <ClassForm label="Create new class" okText="Create" onOk={props.createClass} />
);

export default connect(state => ({ username: state.user.username, songs: state.songs }), {
  createClass,
})(CreateClass);
