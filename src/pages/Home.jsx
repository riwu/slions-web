import React from 'react';
import Anchor from '../components/Anchor';
import { AppStore, GooglePlay, AppIcon } from '../assets/images';
import Login from '../components/Login';
import './Home.css';

const Main = props => (
  <div className="Home">
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
    <Anchor className="app-store" href="https://itunes.apple.com/app/id1328375727">
      <AppStore href={props.href} />
    </Anchor>
    <Anchor href="https://play.google.com/store/apps/details?id=riwu.slions">
      <GooglePlay href={props.href} />
    </Anchor>
    <Login className="Home-Login" onLogin={() => props.history.push('/classes')} />
  </div>
);

export default Main;
