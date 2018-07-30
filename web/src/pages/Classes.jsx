import React from 'react';
import CreateClass from '../components/CreateClass';
import UpdateVideoSize from '../components/UpdateVideoSize';
import ClassList from '../components/ClassList';
import styles from './Classes.module.css';

const Classes = props => (
  <div className={styles.container}>
    <div className={styles.buttons}>
      <CreateClass />
      <UpdateVideoSize />
    </div>
    <ClassList history={props.history} />
  </div>
);

export default Classes;
