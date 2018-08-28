import React from 'react';
import MobileLink from './MobileLink';
import InstantFeedback from './InstantFeedback';
import Experts from './Experts';
import Features from './Features';
import Classroom from './Classroom';
import styles from './index.module.css';

const Home = () => (
  <div className={styles.container}>
    <MobileLink />
    <InstantFeedback />
    <Experts />
    <Features />
    <Classroom />
  </div>
);

export default Home;
