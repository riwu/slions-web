import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd';
import Students from './Students';
import { DATA } from '../util/languages';

const ClassList = props => (
  <Table
    expandRowByClick
    expandedRowRender={Students}
    dataSource={Object.entries(props.classes).map(([id, classInfo]) => ({
      key: id,
      title: classInfo.title,
      language: classInfo.language,
      languageLabel: DATA.LABEL[classInfo.language],
      students: classInfo.students,
    }))}
    columns={[
      {
        title: 'Title',
        dataIndex: 'title',
      },
      {
        title: 'Language',
        dataIndex: 'languageLabel',
      },
    ]}
  />
);

export default connect(state => ({ classes: state.classes }))(ClassList);
