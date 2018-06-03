import React from 'react';
import { connect } from 'react-redux';
import { getClasses, getSongs } from '../actions';
import CreateClass from '../components/CreateClass';
import Class from '../components/ClassList';
import './ClassList.css';

class ClassList extends React.Component {
  componentDidMount() {
    this.props.getClasses().then(({ classes }) => {
      const languages = [...new Set(Object.values(classes).map(({ language }) => language))];
      languages.forEach(language => this.props.getSongs(language));
    });
  }
  render() {
    return (
      <div className="ClassList">
        <CreateClass className="CreateClass" />
        <Class />
      </div>
    );
  }
}

export default connect(null, {
  getClasses,
  getSongs,
})(ClassList);
