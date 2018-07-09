import React from 'react';
import Anchor from '../components/Anchor';
import { AppStore, GooglePlay, AppIcon } from '../assets/images';
import Login from '../components/Login';
import styles from './Home.module.css';

const Home = props => (
  <div className={styles.container}>
    <Login
      className={styles.login}
      onLogin={() => {
        if (props.location.state.redirected) {
          props.history.goBack();
        } else {
          props.history.push('/classes');
        }
      }}
    />
    <AppIcon />
    <h1>Welcome to SLIONS</h1>
    <h2>
      A multi-language Karaoke app for making language learning fun and engaging by providing
      automated feedback through speech to text transcription as well as personalised profile and
      usage analysis.
    </h2>
    <h2>
      Awarded{' '}
      <Anchor href="https://comp.nus.edu.sg/entrepreneurship/awards/winners">
        I&E Practicum Grant ($10000) and SoC Innovation Prize ($2000) 2018
      </Anchor>
    </h2>
    <br />
    <h3>
      This is the web portal for teachers.<br />Download the mobile app now!
    </h3>
    <Anchor className={styles.appStore} href="https://itunes.apple.com/app/id1328375727">
      <AppStore href={props.href} />
    </Anchor>
    <Anchor href="https://play.google.com/store/apps/details?id=riwu.slions">
      <GooglePlay href={props.href} />
    </Anchor>
  </div>
);

export default Home;
