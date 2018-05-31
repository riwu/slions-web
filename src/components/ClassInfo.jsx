import React from 'react';
import { connect } from 'react-redux';

const ClassInfo = props => <h1>Class: {props.class.title}</h1>;

export default connect((state, props) => ({ class: state.classes[props.id] }))(ClassInfo);
