import React from 'react';
import { Table } from 'antd';
import SongDetails from './SongDetails';

const StudentDetails = props => (
  <Table
    expandRowByClick
    expandedRowRender={SongDetails}
    dataSource={Object.entries(props.scores).map(([id, song]) => ({
      key: id,
      score: song.avg,
      sections: song.sections,
    }))}
    columns={[
      {
        title: 'Song',
        dataIndex: 'key',
      },
      {
        title: 'Score',
        dataIndex: 'score',
      },
    ]}
  />
);
export default StudentDetails;
