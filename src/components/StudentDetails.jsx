import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd';
import SongDetails from './SongDetails';

const StudentDetails = props => (
  <Table
    expandRowByClick
    expandedRowRender={SongDetails}
    pagination={{ hideOnSinglePage: true }}
    dataSource={Object.entries(props.scores).map(([id, song]) => ({
      key: id,
      name: (props.songs[id] || {}).nativeTrackName,
      sectionsNames: (props.songs[id] || {}).sections,
      score: song.avg,
      sections: song.sections,
    }))}
    columns={[
      {
        title: 'Song',
        dataIndex: 'name',
      },
      {
        title: 'Score',
        dataIndex: 'score',
      },
    ].map(obj => ({
      ...obj,
      align: 'center',
    }))}
  />
);

export default connect((state, props) => ({ songs: state.songs[props.language] }))(StudentDetails);
