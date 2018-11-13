import React from 'react';
import Table from './Table';

class RecordingDetails extends React.Component {
  render() {
    const { props } = this;
    return (
      <Table
        dataSource={Object.entries(props.lines).map(([lineId, line]) => ({
          lineId,
          ...line,
        }))}
        rowKey="lineId"
        columns={[
          {
            title: 'Line',
            dataIndex: 'lineId',
            render: (text, none, index) => index + 1, // eslint-disable-line no-unused-vars
          },
          {
            title: 'Score',
            dataIndex: 'score',
            render: score => Math.round(score * 100),
          },
          {
            title: 'Translation',
            dataIndex: 'translation',
          },
          {
            title: 'Recording',
            /* eslint-disable jsx-a11y/media-has-caption */
            render: obj => (
              <audio
                onPlay={(e) => {
                  if (this.audioRef) this.audioRef.pause();
                  this.audioRef = e.target;
                  props.onModalCloseCallback(() => this.audioRef.pause());
                }}
                preload="metadata"
                loop
                controls
                src={`${props.recordingBaseURL + obj.lineId}-${props.timestamp}.wav`}
              />
            ),
            /* eslint-enable */
          },
        ]}
      />
    );
  }
}

export default RecordingDetails;
