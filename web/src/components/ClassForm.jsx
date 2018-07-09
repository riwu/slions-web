import React from 'react';
import { connect } from 'react-redux';
import { Modal, Input, Form, Select } from 'antd';
import { DATA } from '../util/languages';
import PickSong from './PickSong';

class ClassForm extends React.Component {
  constructor(props) {
    super(props);
    const language = Object.keys(DATA.LABEL)[0];
    this.state = {
      visible: false,
      songs: Object.keys(props.songsList[language] || {}).reduce((acc, { id }) => {
        acc[id] = true;
        return acc;
      }, {}),
      language,
      title: '',
      key: null,
    };
  }

  // eslint-disable-next-line no-unused-vars
  toggleModal = (e, data) => this.setState(({ visible }) => ({ visible: !visible, ...data }));

  handleLanguageChange = (language) => {
    this.setState({ language });
  };

  handleSongSelect = (songId, state) => {
    this.setState(prevState => ({
      songs: {
        ...prevState.songs,
        [songId]: state,
      },
    }));
  };

  handleCreate = () => {
    this.props
      .onOk({
        ...(this.state.key !== null && { id: this.state.key }),
        title: this.state.title.trim() || 'Default class title',
        language: this.state.language,
        songs: this.state.songs,
      })
      .then(() => this.setState({ visible: false }))
      .catch(e => alert(`Error: ${e.message}`));
  };

  render() {
    const { props } = this;
    return (
      <React.Fragment>
        {props.children(this.toggleModal)}
        <Modal
          title={props.label}
          visible={this.state.visible}
          onOk={this.handleCreate}
          okText={props.okText}
          onCancel={this.toggleModal}
        >
          <Form layout="horizontal">
            {props.Share && <props.Share id={this.state.key} />}
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
                songs={this.state.songs}
                language={this.state.language}
              />
            </Form.Item>
          </Form>
        </Modal>
      </React.Fragment>
    );
  }
}

export default connect(state => ({ songsList: state.songs }))(ClassForm);
