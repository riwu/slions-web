import React from 'react';
import { connect } from 'react-redux';
import { getClasses } from '../actions';
import Students from '../components/Students';
import ClassSelection from '../components/ClassSelection';

class ClassList extends React.Component {
  componentDidMount() {
    this.props.getClasses().then(() => {
      console.log('gotten classes');
      // if
      // this.props.history.replace('/classes/');
    });
  }
  render() {
    const { props } = this;
    return (
      <div>
        <ClassSelection />
        <Students students={(props.classes[this.props.match.params.id] || {}).students} />
      </div>
    );
  }
}

export default connect(state => ({ classes: state.classes }), {
  getClasses,
})(ClassList);
