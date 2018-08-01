import React from 'react';
import { connect } from 'react-redux';
import { Table, Card } from 'antd';
import moment from 'moment';
import computeScore from '../util/computeScore';
import styles from './ClassList.module.css';

const ClassList = props => (
  <Card>
    <Table
      rowClassName={styles.row}
      onRow={row => ({
        onClick: () => props.history.push(`/class/${row.key}`),
      })}
      pagination={{ hideOnSinglePage: true }}
      dataSource={Object.entries(props.classes).map(([id, classInfo]) => ({
        ...classInfo,
        key: id,
        ...computeScore(classInfo, props.languages),
      }))}
      columns={[
        {
          title: 'Title',
          dataIndex: 'title',
          sorter: (a, b) => a.title.localeCompare(b.title),
        },
        {
          title: 'Language',
          dataIndex: 'languageLabel',
          sorter: (a, b) => a.languageLabel.localeCompare(b.languageLabel),
        },
        {
          title: 'Created On',
          dataIndex: 'createdOnText',
          defaultSortOrder: 'descend',
          sorter: (a, b) => moment(a.createdOn) - moment(b.createdOn),
        },
        {
          title: 'Students',
          dataIndex: 'studentsCount',
          sorter: (a, b) => a.studentsCount - b.studentsCount,
        },
        {
          title: 'Average Score',
          dataIndex: 'avgScore',
          sorter: (a, b) => a.avgScore - b.avgScore,
        },
        {
          title: 'Highest Score',
          dataIndex: 'highestScore',
          sorter: (a, b) => a.highestScore - b.highestScore,
        },
        {
          title: 'Lowest Score',
          dataIndex: 'lowestScore',
          sorter: (a, b) => a.lowestScore - b.lowestScore,
        },
      ].map(obj => ({
        ...obj,
        align: 'center',
      }))}
    />
  </Card>
);

export default connect(state => ({
  classes: state.classes,
  languages: state.languages,
}))(ClassList);
