import React from 'react';
import { Table } from 'antd';
import StudentDetails from './StudentDetails';

const Students = props => (
  <Table
    expandRowByClick
    expandedRowRender={data => <StudentDetails {...data} language={props.language} />}
    dataSource={props.students}
    pagination={{ hideOnSinglePage: true }}
    columns={[
      {
        title: 'Username',
        dataIndex: 'username',
        sorter: (a, b) => a.username.localeCompare(b.username),
      },
      {
        title: 'Email',
        dataIndex: 'email',
        sorter: (a, b) => a.email.localeCompare(b.email),
      },
      {
        title: 'Score',
        dataIndex: 'score',
        defaultSortOrder: 'ascend',
        sorter: (a, b) => a.score - b.score,
      },
    ].map(obj => ({
      ...obj,
      align: 'center',
    }))}
  />
);

export default Students;
