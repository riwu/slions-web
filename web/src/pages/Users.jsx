import React from 'react';
import { connect } from 'react-redux';
import Students from '../components/Students';
import { getUsers } from '../actions';
import computeScore from '../util/computeScore';

class Users extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    return (
      <Students
        students={computeScore({ students: this.props.users }).students}
        sort={{ key: 'inserted', order: 'descend' }}
      />
    );
  }
}
export default connect(
  state => ({ users: state.users }),
  { getUsers },
)(Users);
