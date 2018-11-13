import React from 'react';
import moment from 'moment';
import RecordingDetails from './RecordingDetails';
import Table from './Table';

const SectionDetails = props => (
  <Table
    expandRowByClick
    expandedRowRender={rowProps => (
      <RecordingDetails {...rowProps} onModalCloseCallback={props.onModalCloseCallback} />
    )}
    dataSource={Object.entries(props.section).map(([timestampStr, recording]) => {
      const timestamp = Number(timestampStr);
      return {
        timestamp,
        recordingBaseURL: props.recordingBaseURL,
        ...recording,
      };
    })}
    rowKey="timestamp"
    columns={[
      {
        title: 'Time',
        dataIndex: 'timestamp',
        sorter: (a, b) => a.timestamp - b.timestamp,
        render: timestamp => moment(timestamp).format('DD MMM YY, hh:mm a'),
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
