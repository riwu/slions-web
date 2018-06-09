import React from 'react';
import { Table } from 'antd';

const RecordingDetails = props => (
  <Table
    pagination={{ hideOnSinglePage: true }}
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
    ].map(obj => ({
      ...obj,
      align: 'center',
    }))}
  />
);
export default RecordingDetails;