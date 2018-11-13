import React from 'react';
import Table from './Table';

const RecordingDetails = props => (
  <Table
    dataSource={Object.entries(props.lines).map(([lineId, line]) => ({
      key: lineId,
      score: Math.round(line.score * 100),
      translation: line.translation,
    }))}
    columns={[
      {
        title: 'Line',
        dataIndex: 'key',
        render: (text, none, index) => index + 1, // eslint-disable-line no-unused-vars
      },
      {
        title: 'Score',
        dataIndex: 'score',
      },
      {
        title: 'Translation',
        dataIndex: 'translation',
      },
      {
        title: 'Recording',
        render: obj => (
          <audio
            preload="metadata"
            loop
            controls
            src={`${props.recordingBaseURL + obj.key}-${props.key}.wav`}
          />
        ),
      },
    ]}
  />
);
export default RecordingDetails;
