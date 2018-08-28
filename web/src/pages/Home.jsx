import React from 'react';
import { connect } from 'react-redux';
import Anchor from '../components/Anchor';
import { AppStore, GooglePlay, AppLinkPage } from '../assets/images';
import styles from './Home.module.css';

const Home = props => (
  <div className={styles.container}>
    <div className={styles.leftContainer}>
      <h1 className={styles.title}>
        Language Learning.<br />Made easy, fun and engaging.
      </h1>

      <h3>
        Slions allows you to learn a new language<br />through singing. Get the Slions app now.
      </h3>
      <br />
      <Anchor className={styles.appStore} href="https://itunes.apple.com/app/id1328375727">
        <AppStore href={props.href} />
      </Anchor>
      <Anchor href="https://play.google.com/store/apps/details?id=riwu.slions">
        <GooglePlay href={props.href} />
      </Anchor>
    </div>

    <AppLinkPage />
  </div>
);

export default connect()(Home);
