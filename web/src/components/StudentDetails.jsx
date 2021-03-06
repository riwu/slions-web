import React from 'react';
import { connect } from 'react-redux';
import Table from './Table';
import SongDetails from './SongDetails';

const StudentDetails = props => (
  <Table
    expandRowByClick
    expandedRowRender={rowProps => (
      <SongDetails {...rowProps} onModalCloseCallback={props.onModalCloseCallback} />
    )}
    dataSource={Object.entries(props.scores).map(([id, song]) => {
      const songInfo = props.songs[id] || {};
      return {
        key: id,
        name: songInfo.translatedTitle,
        sectionsNames: songInfo.sections,
        score: song.avg,
        sections: song.sections,
        recordingBaseURL: props.recordingBaseURL,
      };
    })}
    columns={[
      {
        title: 'Song',
        dataIndex: 'name',
        sorter: (a, b) => a.name.localeCompare(b.name),
      },
      {
        title: 'Score',
        dataIndex: 'score',
        defaultSortOrder: 'ascend',
        sorter: (a, b) => a.score - b.score,
      },
    ]}
  />
);

export default connect(state => ({ songs: state.songs }))(StudentDetails);
