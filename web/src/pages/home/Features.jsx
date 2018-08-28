import React from 'react';
import { Icon } from 'antd';
import { FeaturesPageImage } from '../../assets/images';
import commonStyles from './index.module.css';
import styles from './Features.module.css';

const Feature = (props) => {
  const IconElement = <Icon type={props.icon} className={styles.icon} />;
  return (
    <div className={styles.feature}>
      {props.iconLeft && IconElement}
      <span>
        <h2>{props.title}</h2>
        <h4>{props.description}</h4>
      </span>
      {!props.iconLeft && IconElement}
    </div>
  );
};

const Features = () => (
  <div>
    <h1 className={`${commonStyles.title} ${styles.title}`}>Features</h1>
    <div className={`${commonStyles.pageContainer} ${styles.featureContainer}`}>
      <div>
        {[
          {
            title: 'Discover Songs',
            description: 'Latest popular songs curated and translated to maximise your learning.',
            icon: 'search',
          },
          {
            title: 'Multiple Languages',
            description:
              'We intend  to support multiple languages. However, we are starting with Chinese and English for our beta.',
            icon: 'global',
          },
          {
            title: 'My Progress',
            description: 'Easily track your progress and make sure that you are improving!',
            icon: 'line-chart',
          },
        ].map(data => <Feature {...data} />)}
      </div>

      <FeaturesPageImage />

      <div>
        {[
          {
            title: 'Mini Lessons',
            description:
              'Learn vocabulary, sentence structures and pronounciation through our mini series.',
            icon: 'book',
          },
          {
            title: 'Instant Feedback',
            description: 'Receive feedback instantly after singing - helps to accelerate learning.',
            icon: 'form',
          },
          {
            title: 'Karaoke',
            description:
              'Fun and engaging songs to help you make your learning experience enjoyable.',
            icon: 'sound',
          },
        ].map(data => <Feature {...data} iconLeft />)}
      </div>
    </div>
  </div>
);

export default Features;
