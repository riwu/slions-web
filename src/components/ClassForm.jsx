import React from 'react';
import { connect } from 'react-redux';
import { Button, Modal, Input, Form, Select } from 'antd';
import { DATA } from '../util/languages';
import PickSong from './PickSong';
import { createClass } from '../actions';

class ClassForm extends React.Component {
  static defaultProps = {
    title: '',
    language: Object.keys(DATA.LABEL)[0],
    selectedSongs: {},
  };

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      selectedSongs: props.selectedSongs,
      language: props.language,
      title: props.title,
    };
  }

  toggleModal = (e) => {
    this.setState(({ visible }) => ({ visible: !visible }));
    e.stopPropagation();
  };

  handleLanguageChange = (language) => {
    this.setState({ language });
  };

  handleSongSelect = (songId, state) => {
    this.setState(prevState => ({
      selectedSongs: {
        ...prevState.selectedSongs,
        [songId]: state,
      },
    }));
  };

  handleCreate = () => {
    this.props
      .onOk({
        title: this.state.title.trim() || 'Default class title',
        language: this.state.language,
        songs: Object.keys(this.props.songs[this.state.language] || {}).reduce((acc, id) => {
          if (this.state.selectedSongs[id] !== null) {
            acc[id] = this.state.selectedSongs[id] === undefined || this.state.selectedSongs[id];
          }
          return acc;
        }, {}),
      })
      .then(() => this.setState({ visible: false }))
      .catch(e => alert(`Error: ${e.message}`));
  };

  render() {
    const { props } = this;
    return (
      <React.Fragment>
        <Button className={props.className} type="primary" onClick={this.toggleModal}>
          {props.label}
        </Button>
        <Modal
          title={props.label}
          visible={this.state.visible}
          onOk={this.handleCreate}
          okText={props.okText}
          onCancel={this.toggleModal}
        >
          <Form layout="horizontal">
            <Form.Item label="Title">
              <Input
                placeholder="Enter a class title"
                value={this.state.title}
                onChange={e => this.setState({ title: e.target.value })}
              />
            </Form.Item>

            <Form.Item label="Language">
              <Select value={this.state.language} onChange={this.handleLanguageChange}>
                {Object.entries(DATA.LABEL).map(([language, label]) => (
                  <Select.Option key={language}>{label}</Select.Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item label="Songs">
              <PickSong
                onSelect={this.handleSongSelect}
                selectedSongs={this.state.selectedSongs}
                language={this.state.language}
              />
            </Form.Item>
          </Form>
        </Modal>
      </React.Fragment>
    );
  }
}

export default connect(state => ({ songs: state.songs }))(ClassForm);
