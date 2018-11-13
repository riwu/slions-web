import React from 'react';
import moment from 'moment';
import RecordingDetails from './RecordingDetails';
import Table from './Table';

const SectionDetails = props => (
  <Table
    expandRowByClick
    expandedRowRender={RecordingDetails}
    dataSource={Object.entries(props.section).map(([timestampStr, recording]) => {
      const timestamp = Number(timestampStr);
      return {
        key: timestamp,
        score: recording.score,
        lines: recording.lines,
        recordingBaseURL: props.recordingBaseURL,
      };
    })}
    columns={[
      {
        title: 'Time',
        dataIndex: 'key',
        sorter: (a, b) => a.key - b.key,
        render: timestamp => moment(Number(timestamp)).format('DD MMM YY, hh:mm a'),
      },
      {
        title: 'Score',
        dataIndex: 'score',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.score - b.score,
      },
    ]}
  />
);

export default SectionDetails;
