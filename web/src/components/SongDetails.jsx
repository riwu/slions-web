import React from 'react';
import Table from './Table';
import SectionDetails from './SectionDetails';

const SongDetails = props => (
  <Table
    expandRowByClick
    expandedRowRender={rowProps => (
      <SectionDetails {...rowProps} onModalCloseCallback={props.onModalCloseCallback} />
    )}
    dataSource={Object.entries(props.sections).map(([id, section]) => ({
      key: id,
      score: section.highest,
      section: section.section,
      name: ((props.sectionsNames || {})[id] || {}).name,
      recordingBaseURL: props.recordingBaseURL,
    }))}
    columns={[
      {
        title: 'Section',
        dataIndex: 'name',
      },
      {
        title: 'Best score',
        dataIndex: 'score',
      },
    ]}
  />
);

export default SongDetails;
