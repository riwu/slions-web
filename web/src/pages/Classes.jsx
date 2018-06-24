import React from 'react';
import { connect } from 'react-redux';
import { getClasses, getSongs } from '../actions';
import CreateClass from '../components/CreateClass';
import UpdateVideoSize from '../components/UpdateVideoSize';
import ClassesList from '../components/ClassesList';
import styles from './Classes.module.css';
import { DATA } from '../util/languages';

class ClassList extends React.Component {
  componentDidMount() {
    this.props.getClasses();
    Object.keys(DATA.LABEL).forEach(language => this.props.getSongs(language));
  }
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.buttons}>
          <CreateClass />
          <UpdateVideoSize />
        </div>
        <ClassesList />
      </div>
    );
  }
}

export default connect(
  null,
  { getClasses, getSongs },
)(ClassList);
