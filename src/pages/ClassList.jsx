import React from 'react';
import { connect } from 'react-redux';
import { getClasses, getSongs } from '../actions';
import Students from '../components/Students';
import ClassSelection from '../components/ClassSelection';
import ClassInfo from '../components/ClassInfo';
import CreateClass from '../components/CreateClass';
import './ClassList.css';

class ClassList extends React.Component {
  componentDidMount() {
    this.props.getClasses().then(({ classes }) => {
      const routeClassId = this.props.match.params.id;
      const targetClassId = classes[routeClassId] ? routeClassId : Object.keys(classes)[0];
      if (targetClassId !== undefined) {
        this.props.getSongs(classes[targetClassId].language);
      }
      if (classes[routeClassId] === undefined && targetClassId !== undefined) {
        this.props.history.replace(`/classes/${targetClassId}`);
      }
    });
  }
  render() {
    return (
      <div className="ClassList">
        <ClassInfo id={this.props.match.params.id} />
        <div className="buttonGroup">
          <ClassSelection />
          <CreateClass className="CreateClass" />
        </div>
        <Students classId={this.props.match.params.id} />
      </div>
    );
  }
}

export default connect(null, {
  getClasses,
  getSongs,
})(ClassList);
