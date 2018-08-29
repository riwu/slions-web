import React from 'react';
import { ReviewImage, FeedbackLoopImage } from '../../assets/images';
import styles from './index.module.css';

const InstantFeedback = () => (
  <div className={styles.pageContainer}>
    <ReviewImage className={`${styles.leftContainer} ${styles.leftImage}`} />

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
      <br />
      <FeedbackLoopImage />
    </div>
  </div>
);

export default InstantFeedback;
