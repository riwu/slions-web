import React from 'react';
import { Table } from 'antd';

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
        },
        {
          title: 'Score',
          dataIndex: 'score',
        },
        {
          title: 'Translation',
          dataIndex: 'translation',
        },
      ]}
  />
);
export default RecordingDetails;
