import React from 'react';
import { connect } from 'react-redux';
import { Table, Card, Popconfirm, message, notification } from 'antd';
import moment from 'moment';
import computeScore from '../util/computeScore';
import { deleteClass } from '../actions';
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
          dataIndex: 'insertedText',
          defaultSortOrder: 'descend',
          sorter: (a, b) => moment(a.inserted) - moment(b.inserted),
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
        {
          title: 'Action',
          /* eslint-disable jsx-a11y/anchor-is-valid */
          render: obj => (
            <Popconfirm
              title={`Are you sure you want to delete the class: ${obj.title}?`}
              onConfirm={(e) => {
                e.stopPropagation();
                props
                  .deleteClass(obj.key)
                  .then(() => message.success(`Successfully deleted the class: ${obj.title}!`))
                  .catch(err =>
                    notification.error({
                      message: `Failed to delete the class: ${obj.title}`,
                      description: err.message,
                    }));
              }}
              onCancel={e => e.stopPropagation()}
              okText="Yes"
              onClick={e => e.stopPropagation()}
            >
              <a className={styles.delete}>Delete</a>
            </Popconfirm>
          ),
          /* eslint-enable */
        },
      ].map(obj => ({
        ...obj,
        align: 'center',
      }))}
    />
  </Card>
);

export default connect(
  state => ({
    classes: state.classes,
    languages: state.languages,
  }),
  { deleteClass },
)(ClassList);
