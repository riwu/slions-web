import React from 'react';
import { connect } from 'react-redux';
import { Button, Modal, Input, Form, Select } from 'antd';
import { DATA } from '../util/languages';
import PickSong from './PickSong';
import { getSongs, createClass } from '../actions';

class CreateClass extends React.Component {
  state = { visible: false, selectedSongs: {}, language: Object.keys(DATA.LABEL)[0] };

  static getDerivedStateFromProps(props, state) {
    return {
      ...state,
      selectedSongs: Object.keys(props.songs[state.language] || {}).reduce((acc, id) => {
        acc[id] = true;
        return acc;
      }, {}),
    };
  }

  componentDidMount() {
    this.props.getSongs(this.state.language);
  }

  toggleModal = () => this.setState(({ visible }) => ({ visible: !visible }));

  handleLanguageChange = (language) => {
    this.setState({ language });
    this.props.getSongs(language);
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
      .createClass({
        title: (this.title || '').trim() || 'Default class title',
        language: this.state.language,
        songs: this.state.selectedSongs,
      })
      .then(() => this.setState({ visible: false }))
      .catch(e => alert(`Error: ${e.message}`));
  };

  render() {
    const { props } = this;
    return (
      <React.Fragment>
        <Button className={props.className} type="primary" onClick={this.toggleModal}>
          Create new class
        </Button>
        <Modal
          title="Create new class"
          visible={this.state.visible}
          onOk={this.handleCreate}
          okText="Create"
          onCancel={this.toggleModal}
        >
          <Form layout="horizontal">
            <Form.Item label="Title">
              <Input
                placeholder="Enter a class title"
                onChange={(title) => {
                  this.title = title;
                }}
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

export default connect(state => ({ username: state.user.username, songs: state.songs }), {
  getSongs,
  createClass,
})(CreateClass);
