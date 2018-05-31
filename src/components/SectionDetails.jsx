import React from 'react';
import { Table } from 'antd';
import moment from 'moment';
import RecordingDetails from './RecordingDetails';

const SectionDetails = props => (
  <Table
    expandRowByClick
    expandedRowRender={RecordingDetails}
    dataSource={Object.entries(props.section).map(([timestamp, recording]) => ({
        key: timestamp,
        time: moment(Number(timestamp)).format('DD MMM YY, hh:mm a'),
        score: recording.score,
        lines: recording.lines,
      }))}
    columns={[
        {
          title: 'Time',
          dataIndex: 'time',
        },
        {
          title: 'Score',
          dataIndex: 'score',
        },
      ]}
  />
);
export default SectionDetails;
