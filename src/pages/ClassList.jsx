import React from 'react';
import { connect } from 'react-redux';
import { getClasses, getSongs } from '../actions';
import Students from '../components/Students';
import ClassSelection from '../components/ClassSelection';

class ClassList extends React.Component {
  componentDidMount() {
    this.props.getClasses().then(({ classes }) => {
      const classIds = Object.keys(classes);
      if (this.props.match.params.id === undefined && classIds.length) {
        this.props.history.replace(`/classes/${classIds[0]}`);
      }
    });
    this.props.getSongs();
  }
  render() {
    return (
      <div>
        <ClassSelection />
        <Students classId={this.props.match.params.id} />
      </div>
    );
  }
}

export default connect(null, {
  getClasses,
  getSongs,
})(ClassList);
