import React from 'react';
import { Table } from 'antd';
import SectionDetails from './SectionDetails';

const SongDetails = props => (
  <Table
    expandRowByClick
    expandedRowRender={SectionDetails}
    dataSource={Object.entries(props.sections).map(([id, section]) => ({
      key: id,
      score: section.highest,
      section: section.section,
    }))}
    columns={[
      {
        title: 'Section',
        dataIndex: 'key',
      },
      {
        title: 'Best score',
        dataIndex: 'score',
      },
    ]}
  />
);
export default SongDetails;
