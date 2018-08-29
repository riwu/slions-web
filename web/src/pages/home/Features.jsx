import React from 'react';
import { Icon } from 'antd';
import {
  SongSelectImage,
  LanguagesImage,
  ProgressImage,
  LessonImage,
  ReviewImage,
  KaraokeImage,
} from '../../assets/images';
import commonStyles from './index.module.css';
import styles from './Features.module.css';

const Feature = (props) => {
  const IconElement = (
    <Icon
      type={props.icon}
      className={styles.icon + (props.selected ? ` ${styles.selectedIcon}` : '')}
      onClick={props.onClick}
    />
  );
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

const features = [
  {
    title: 'Discover Songs',
    description: 'Latest popular songs curated and translated to maximise your learning.',
    icon: 'search',
    image: <SongSelectImage />,
  },
  {
    title: 'Multiple Languages',
    description:
      'We intend  to support multiple languages. However, we are starting with Chinese and English for our beta.',
    icon: 'global',
    image: <LanguagesImage />,
  },
  {
    title: 'My Progress',
    description: 'Easily track your progress and make sure that you are improving!',
    icon: 'line-chart',
    image: <ProgressImage />,
  },
  {
    title: 'Mini Lessons',
    description:
      'Learn vocabulary, sentence structures and pronounciation through our mini series.',
    icon: 'book',
    image: <LessonImage />,
  },
  {
    title: 'Instant Feedback',
    description: 'Receive feedback instantly after singing - helps to accelerate learning.',
    icon: 'form',
    image: <ReviewImage />,
  },
  {
    title: 'Karaoke',
    description: 'Fun and engaging songs to help you make your learning experience enjoyable.',
    icon: 'sound',
    image: <KaraokeImage />,
  },
];

const ITERATIONS_TO_SKIP_WHEN_SELECTED = 5;

class Features extends React.Component {
  state = {
    selected: 0,
  };
  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.iterationsToSkip) {
        this.iterationsToSkip -= 1;
      } else {
        this.setState(prevState => ({ selected: (prevState.selected + 1) % features.length }));
      }
    }, 2000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  handleSelect(selected) {
    this.setState({ selected });
    this.iterationsToSkip = ITERATIONS_TO_SKIP_WHEN_SELECTED;
  }
  render() {
    const mid = features.length / 2;
    return (
      <div>
        <h1 className={`${commonStyles.title} ${styles.title}`}>Features</h1>
        <div className={`${commonStyles.pageContainer} ${styles.featureContainer}`}>
          <div>
            {features
              .slice(0, mid)
              .map((data, i) => (
                <Feature
                  {...data}
                  onClick={() => this.handleSelect(i)}
                  selected={this.state.selected === i}
                />
              ))}
          </div>

          {features[this.state.selected].image}

          <div>
            {features
              .slice(mid)
              .map((data, i) => (
                <Feature
                  {...data}
                  iconLeft
                  onClick={() => this.handleSelect(mid + i)}
                  selected={this.state.selected === mid + i}
                />
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Features;
