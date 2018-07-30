import React from 'react';
import { connect } from 'react-redux';
import { getClasses, getSongs } from '../actions';
import CreateClass from '../components/CreateClass';
import UpdateVideoSize from '../components/UpdateVideoSize';
import ClassList from '../components/ClassList';
import styles from './Classes.module.css';
import { DATA } from '../util/languages';

class Classes extends React.Component {
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
        <ClassList history={this.props.history} />
      </div>
    );
  }
}

export default connect(
  null,
  { getClasses, getSongs },
)(Classes);
