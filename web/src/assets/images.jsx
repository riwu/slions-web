import React from 'react';
import AppStorePNG from './app_store.png';
import AppStoreWEBP from './app_store.webp';

import GooglePlayPNG from './google_play.png';
import GooglePlayWEBP from './google_play.webp';

import LogoPurplePNG from './logo_purple.png';
import LogoPurpleWEBP from './logo_purple.webp';

import LogoWhitePNG from './logo_white.png';
import LogoWhiteWEBP from './logo_white.webp';

import SongSelectPNG from './song_select.png';
import SongSelectWEBP from './song_select.webp';

import ReviewPNG from './review.png';
import ReviewWEBP from './review.webp';

import CollagePNG from './collage.png';
import CollageWEBP from './collage.webp';

import ClassroomPNG from './web_app.png';
import ClassroomWEBP from './web_app.webp';

import FeedbackLoopPNG from './feedback_loop.png';
import FeedbackLoopWEBP from './feedback_loop.webp';

import LessonPNG from './lesson.png';
import LessonWEBP from './lesson.webp';

import LanguagesPNG from './languages.png';
import LanguagesWEBP from './languages.webp';

import ProgressPNG from './progress.png';
import ProgressWEBP from './progress.webp';

import KaraokePNG from './karaoke.png';
import KaraokeWEBP from './karaoke.webp';

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

export const LogoPurple = props => <Image src={LogoPurplePNG} webp={LogoPurpleWEBP} {...props} />;
export const LogoWhite = props => <Image src={LogoWhitePNG} webp={LogoWhiteWEBP} {...props} />;

export const SongSelectImage = props => (
  <Image src={SongSelectPNG} webp={SongSelectWEBP} {...props} />
);

export const ReviewImage = props => <Image src={ReviewPNG} webp={ReviewWEBP} {...props} />;

export const CollageImage = props => <Image src={CollagePNG} webp={CollageWEBP} {...props} />;

export const LessonImage = props => <Image src={LessonPNG} webp={LessonWEBP} {...props} />;

export const ClassroomImage = props => <Image src={ClassroomPNG} webp={ClassroomWEBP} {...props} />;

export const FeedbackLoopImage = props => (
  <Image src={FeedbackLoopPNG} webp={FeedbackLoopWEBP} {...props} />
);

export const LanguagesImage = props => <Image src={LanguagesPNG} webp={LanguagesWEBP} {...props} />;

export const ProgressImage = props => <Image src={ProgressPNG} webp={ProgressWEBP} {...props} />;

export const KaraokeImage = props => <Image src={KaraokePNG} webp={KaraokeWEBP} {...props} />;
