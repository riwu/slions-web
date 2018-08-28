import React from 'react';
import AppStorePNG from './app_store.png';
import AppStoreWEBP from './app_store.webp';
import GooglePlayPNG from './google_play.png';
import GooglePlayWEBP from './google_play.webp';
import AppLogoPNG from './slions_logo.png';
import AppLinkPagePNG from './song_select.png';
import FeedbackPagePNG from './review.png';
import ExpertsPagePNG from './collage.png';
import FeaturesPagePNG from './lesson.png';
import ClassroomPagePNG from './web_app.png';

const Image = props => (
  <picture className={props.className}>
    {/* <source srcSet={props.webp} type="image/webp" /> */}
    <img src={props.src} alt={props.href} />
  </picture>
);

export const AppStoreLogo = props => <Image src={AppStorePNG} webp={AppStoreWEBP} {...props} />;
export const GooglePlayLogo = props => (
  <Image src={GooglePlayPNG} webp={GooglePlayWEBP} {...props} />
);

export const AppLogo = props => <Image src={AppLogoPNG} webp={GooglePlayWEBP} {...props} />;

export const AppLinkPageImage = props => (
  <Image src={AppLinkPagePNG} webp={GooglePlayWEBP} {...props} />
);

export const FeedbackPageImage = props => (
  <Image src={FeedbackPagePNG} webp={GooglePlayWEBP} {...props} />
);

export const ExpertsPageImage = props => (
  <Image src={ExpertsPagePNG} webp={GooglePlayWEBP} {...props} />
);

export const FeaturesPageImage = props => (
  <Image src={FeaturesPagePNG} webp={GooglePlayWEBP} {...props} />
);

export const ClassroomPageImage = props => (
  <Image src={ClassroomPagePNG} webp={GooglePlayWEBP} {...props} />
);
