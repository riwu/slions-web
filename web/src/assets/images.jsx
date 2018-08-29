import React from 'react';
import AppStorePNG from './app_store.png';
import AppStoreWEBP from './app_store.webp';

import GooglePlayPNG from './google_play.png';
import GooglePlayWEBP from './google_play.webp';

import AppLogoPNG from './slions_logo.png';
import AppLogoWEBP from './slions_logo.webp';

import AppLinkPagePNG from './song_select.png';
import AppLinkPageWEBP from './song_select.webp';

import FeedbackPagePNG from './review.png';
import FeedbackPageWEBP from './review.webp';

import ExpertsPagePNG from './collage.png';
import ExpertsPageWEBP from './collage.webp';

import FeaturesPagePNG from './lesson.png';
import FeaturesPageWEBP from './lesson.webp';

import ClassroomPagePNG from './web_app.png';
import ClassroomPageWEBP from './web_app.webp';

import FeedbackLoopPNG from './feedback_loop.png';
import FeedbackLoopWEBP from './feedback_loop.webp';

const Image = props => (
  <picture className={props.className}>
    <source srcSet={props.webp} type="image/webp" />
    <img src={props.src} alt={props.href} />
  </picture>
);

export const AppStoreLogo = props => <Image src={AppStorePNG} webp={AppStoreWEBP} {...props} />;
export const GooglePlayLogo = props => (
  <Image src={GooglePlayPNG} webp={GooglePlayWEBP} {...props} />
);

export const AppLogo = props => <Image src={AppLogoPNG} webp={AppLogoWEBP} {...props} />;

export const AppLinkPageImage = props => (
  <Image src={AppLinkPagePNG} webp={AppLinkPageWEBP} {...props} />
);

export const FeedbackPageImage = props => (
  <Image src={FeedbackPagePNG} webp={FeedbackPageWEBP} {...props} />
);

export const ExpertsPageImage = props => (
  <Image src={ExpertsPagePNG} webp={ExpertsPageWEBP} {...props} />
);

export const FeaturesPageImage = props => (
  <Image src={FeaturesPagePNG} webp={FeaturesPageWEBP} {...props} />
);

export const ClassroomPageImage = props => (
  <Image src={ClassroomPagePNG} webp={ClassroomPageWEBP} {...props} />
);

export const FeedbackLoopImage = props => (
  <Image src={FeedbackLoopPNG} webp={FeedbackLoopWEBP} {...props} />
);

