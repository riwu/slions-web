import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd';
import moment from 'moment';
import Students from './Students';
import ClassForm from './ClassForm';
import { DATA } from '../util/languages';
import { updateClass } from '../actions';

const ClassList = props => (
  <Table
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
        title: 'View songs',
        render: data => (
          <ClassForm
            title={data.title}
            selectedSongs={data.songs}
            language={data.language}
            label="Edit"
            okText="Save"
            onOk={classInfo => props.updateClass(data.key, classInfo)}
          />
        ),
      },
    ]}
  />
);

export default connect(state => ({ classes: state.classes }), { updateClass })(ClassList);
