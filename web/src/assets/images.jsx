import React from 'react';
import AppStorePNG from './app_store.png';
import AppStoreWEBP from './app_store.webp';
import GooglePlayPNG from './google_play.png';
import GooglePlayWEBP from './google_play.webp';
import AppLogoPNG from './slions_logo.png';
import AppLinkPagePNG from './song_select.png';

const Image = props => (
  <picture>
    {/* <source srcSet={props.webp} type="image/webp" /> */}
    <img src={props.src} alt={props.href} />
  </picture>
);

export const AppStore = props => <Image src={AppStorePNG} webp={AppStoreWEBP} {...props} />;
export const GooglePlay = props => <Image src={GooglePlayPNG} webp={GooglePlayWEBP} {...props} />;
export const AppLogo = props => <Image src={AppLogoPNG} webp={GooglePlayWEBP} {...props} />;
export const AppLinkPage = props => <Image src={AppLinkPagePNG} webp={GooglePlayWEBP} {...props} />;
