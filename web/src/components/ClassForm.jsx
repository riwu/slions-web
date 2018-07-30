import React from 'react';
import { connect } from 'react-redux';
import { Modal, Input, Form, Select, notification } from 'antd';
import { DATA } from '../util/languages';
import PickSong from './PickSong';

class ClassForm extends React.Component {
  constructor(props) {
    super(props);
    const language = Object.keys(DATA.LABEL)[0];
    this.state = {
      visible: false,
      songs: this.getDefaultSongs(language),
      language,
      title: '',
      classId: null,
    };
  }

  onSongsUpdate = (songs) => {
    this.setState({ songs });
  };

  getDefaultSongs(language) {
    return Object.keys(this.props.songsList[language] || {}).reduce((acc, id) => {
      acc[id] = true;
      return acc;
    }, {});
  }

  toggleModal = (data) => {
    this.setState(({ visible }) => ({ visible: !visible, ...data }));
  };

  handleLanguageChange = (language) => {
    this.setState({ language, songs: this.getDefaultSongs(language) });
  };

  handleSave = () => {
    this.props
      .onOk({
        ...(this.state.classId !== null && { id: this.state.classId }),
        title: this.state.title.trim() || 'Default class title',
        language: this.state.language,
        songs: this.state.songs,
      })
      .then(() => this.setState({ visible: false }))
      .catch(e => notification.error({ message: 'Failed to save class', description: e.message }));
  };

  render() {
    const { props } = this;
    return (
      <React.Fragment>
        {props.children(this.toggleModal)}
        <Modal
          title={props.label}
          visible={this.state.visible}
          onOk={this.handleSave}
          okText={props.okText}
          onCancel={() => this.toggleModal()}
        >
          <Form layout="horizontal">
            {props.Share && <props.Share id={this.state.classId} />}
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
                onSongsUpdate={this.onSongsUpdate}
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
