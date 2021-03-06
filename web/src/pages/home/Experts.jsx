import React from 'react';
import { CollageImage } from '../../assets/images';
import styles from './index.module.css';

const Experts = () => (
  <div className={styles.pageContainer}>
    <div className={styles.leftContainer}>
      <h1 className={styles.title}>
        Created in collaboration with
        <br />
        language experts
      </h1>

      <h3 className={styles.description}>
        Slions has been through extensive user testing. We designed it from the ground up for the
        next generation of students.
      </h3>
      <br />
    </div>

    <CollageImage />
  </div>
);

export default Experts;
