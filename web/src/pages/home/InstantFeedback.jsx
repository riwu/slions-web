import React from 'react';
import { FeedbackPageImage } from '../../assets/images';
import styles from './index.module.css';

const InstantFeedback = () => (
  <div className={styles.pageContainer}>
    <FeedbackPageImage className={styles.leftContainer} />

    <div>
      <h1 className={styles.title}>Instant feedback loop</h1>

      <h3 className={styles.description}>
        Our proprietry Automatic Speech Recognition (ASR) technology provides an immediate feedback
        loop.
        <br />
        <br />
        Students are now enabled to learn anywhere, anytime.
      </h3>
      <br />
    </div>
  </div>
);

export default InstantFeedback;
