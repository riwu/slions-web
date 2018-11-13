import React from 'react';
import CreateClass from '../components/CreateClass';
import UpdateVideoSize from '../components/UpdateVideoSize';
import ClassList from '../components/ClassList';
import styles from './Classes.module.css';
import { LogoPurple } from '../assets/images';

const Classes = props => (
  <div className={styles.container}>
    <div className={styles.buttons}>
      <span className={styles.header}>
        <LogoPurple />
        <span>
          <span className={styles.title}>Classroom</span>
          <span className={styles.description}>for slions</span>
        </span>
      </span>
      <span>
        <CreateClass />
        <UpdateVideoSize className={styles.updateVideoSize} />
      </span>
    </div>
    <ClassList history={props.history} />
  </div>
);

export default Classes;
