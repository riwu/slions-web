import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd';
import moment from 'moment';
import Students from './Students';
import { DATA } from '../util/languages';

const ClassList = props => (
  <Table
    expandRowByClick
    expandedRowRender={Students}
    dataSource={Object.entries(props.classes).map(([id, classInfo]) => ({
      ...classInfo,
      key: id,
      languageLabel: DATA.LABEL[classInfo.language],
      createdOn: moment(classInfo.createdOn).format('ddd, DD MMM YY, hh:mm a'),
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
      {
        title: 'Created On',
        dataIndex: 'createdOn',
      },
      {
        title: 'Actions',
        render: obj => (
          <a
            onClick={(e) => {
              e.stopPropagation();
              props.toggleModal(obj);
            }}
          >
            Edit
          </a>
        ),
      },
    ]}
  />
);

export default connect(state => ({ classes: state.classes }))(ClassList);
