import React from 'react';
import { connect } from 'react-redux';
import { Button, message } from 'antd';
import { joinClass, getClass } from '../actions/api';
import formatDate from '../util/formatDate';
import styles from './JoinClass.module.css';

class JoinClass extends React.Component {
  state = {
    notFound: false,
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    getClass(id)
      .then(info => this.setState(info))
      .catch((e) => {
        if ((e.response || {}).status === 404) {
          this.setState({ notFound: true });
        }
      });
  }
  render() {
    const { props } = this;
    const { id } = props.match.params;
    if (this.state.notFound) return `Class with id ${id} not found!`;
    return (
      <div className={styles.container}>
        <div>
          <div>
            <b>Title: </b>
            {this.state.title}
          </div>
          <div>
            <b>Language: </b>
            {props.languages[this.state.language]}
          </div>
          <div>
            <b>Created On: </b>
            {formatDate(this.state.inserted)}
          </div>
          <div className={styles.button}>
            <Button
              type="primary"
              onClick={() =>
                joinClass(id)
                  .then(() => {
                    message.success(`Successfully joined ${this.state.title}`);
                    props.history.push('/classes/joined');
                  })
                  .catch((e) => {
                    if ((e.response || {}).status === 409) {
                      message.warn(`You have already joined the class ${this.state.title}`);
                      props.history.push('/classes');
                      return;
                    }
                    message.error(`Failed to join ${this.state.title}: ${e.message}`);
                  })
              }
            >
              Join
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => ({ languages: state.languages }))(JoinClass);
