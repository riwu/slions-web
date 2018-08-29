import React from 'react';
import Anchor from '../../components/Anchor';
import { AppStoreLogo, GooglePlayLogo, SongSelectImage } from '../../assets/images';
import styles from './index.module.css';

const MobileLink = () => (
  <div className={styles.pageContainer}>
    <div className={styles.leftContainer}>
      <h1 className={styles.title}>
        Language Learning<br />Made easy, fun and engaging
      </h1>

      <h3 className={styles.description}>
        Slions allows you to learn a new language through singing.
        <br />
        Get the Slions app now!
      </h3>
      <br />
      <Anchor className={styles.appStore} href="https://itunes.apple.com/app/id1328375727">
        <AppStoreLogo />
      </Anchor>
      <Anchor href="https://play.google.com/store/apps/details?id=riwu.slions">
        <GooglePlayLogo />
      </Anchor>
    </div>

    <SongSelectImage className={styles.rightImage} />
  </div>
);

export default MobileLink;
