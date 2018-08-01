import React from 'react';
import { connect } from 'react-redux';
import { Table, Popconfirm, notification, message } from 'antd';
import moment from 'moment';
import { removeFromClass } from '../actions';
import formatDate from '../util/formatDate';
import styles from './ClassList.module.css';

const Teachers = props => (
  <Table
    rowClassName={styles.row}
    onRow={student => ({
      onClick: () => this.setState({ student, visible: true }),
    })}
    dataSource={Object.entries(props.teachers).map(([id, teacher]) => ({
      key: id,
      insertedOnText: formatDate(teacher.insertedOn),
      ...teacher,
    }))}
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
        title: 'Joined',
        dataIndex: 'insertedOnText',
        defaultSortOrder: 'descend',
        sorter: (a, b) => moment(a.insertedOn) - moment(b.insertedOn),
      },
      {
        title: 'Action',
        /* eslint-disable jsx-a11y/anchor-is-valid */
        render: obj => (
          <Popconfirm
            title={`Are you sure you want to remove ${obj.username} from the class?`}
            onConfirm={(e) => {
              e.stopPropagation();
              props
                .removeFromClass(props.classId, obj.key)
                .then(() => message.success(`Successfully removed ${obj.username} from class!`))
                .catch(err =>
                  notification.error({
                    message: `Failed to remove ${obj.username} from class`,
                    description: err.message,
                  }));
            }}
            onCancel={e => e.stopPropagation()}
            okText="Yes"
            onClick={e => e.stopPropagation()}
          >
            <a>Remove</a>
          </Popconfirm>
        ),
        /* eslint-enable */
      },
    ].map(obj => ({
      ...obj,
      align: 'center',
    }))}
  />
);

export default connect(
  null,
  { removeFromClass },
)(Teachers);
