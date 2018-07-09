import React from 'react';
import { Table } from 'antd';
import moment from 'moment';
import RecordingDetails from './RecordingDetails';

const SectionDetails = props => (
  <Table
    expandRowByClick
    expandedRowRender={RecordingDetails}
    pagination={{ hideOnSinglePage: true }}
    dataSource={Object.entries(props.section).map(([timestampStr, recording]) => {
      const timestamp = Number(timestampStr);
      return {
        key: timestamp,
        time: moment(Number(timestamp)).format('DD MMM YY, hh:mm a'),
        score: recording.score,
        lines: recording.lines,
        recordingBaseURL: props.recordingBaseURL,
      };
    })}
    columns={[
      {
        title: 'Time',
        dataIndex: 'time',
        sorter: (a, b) => a.key - b.key,
      },
      {
        title: 'Score',
        dataIndex: 'score',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.score - b.score,
      },
    ].map(obj => ({
      ...obj,
      align: 'center',
    }))}
  />
);

export default SectionDetails;
