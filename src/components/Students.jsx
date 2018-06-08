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
      },
      {
        title: 'Email',
        dataIndex: 'email',
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

export default Students;
