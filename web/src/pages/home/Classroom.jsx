import React from 'react';
import { ClassroomPageImage } from '../../assets/images';
import styles from './index.module.css';
import Login from '../../components/Login';

const Classroom = () => (
  <div className={styles.pageContainer}>
    <div className={styles.leftContainer}>
      <h1 className={styles.title}>Introducing Slions Classroom</h1>

      <h3 className={styles.description}>
        Slions Classroom is a web application built for teachers. Analytics tools are built in for
        teachers to identify areas of improvement for their students.
      </h3>
      <br />
      <Login />
    </div>

    <ClassroomPageImage />
  </div>
);

export default Classroom;
