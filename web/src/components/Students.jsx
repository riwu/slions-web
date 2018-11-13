import React from 'react';
import { connect } from 'react-redux';
import { Popconfirm, notification, message, Modal, Divider } from 'antd';
import moment from 'moment';
import Table from './Table';
import StudentDetails from './StudentDetails';
import { removeFromClass, promoteToTeacher } from '../actions';
import formatDate from '../util/formatDate';
import styles from './ClassList.module.css';

class Students extends React.Component {
  state = {
    student: {},
    visible: false,
  };
  render() {
    const { props } = this;
    return (
      <React.Fragment>
        <Modal
          title={this.state.student.username}
          visible={this.state.visible}
          onCancel={() => this.setState({ visible: false })}
          width="90%"
          footer={null}
        >
          <StudentDetails {...this.state.student} language={props.language} />
        </Modal>
        <Table
          rowClassName={styles.row}
          onRow={student => ({
            onClick: () => this.setState({ student, visible: true }),
          })}
          dataSource={props.students}
          columns={[
            {
              title: 'Username',
              dataIndex: 'username',
              sorter: (a, b) => a.username.localeCompare(b.username),
            },
            {
              title: 'Display name',
              dataIndex: 'displayName',
              sorter: (a, b) => a.displayName.localeCompare(b.displayName),
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
            {
              title: 'Joined',
              dataIndex: 'inserted',
              render: inserted => formatDate(inserted),
              sorter: (a, b) => moment(a.inserted) - moment(b.inserted),
            },
            {
              title: 'Action',
              /* eslint-disable jsx-a11y/anchor-is-valid */
              render: obj => (
                <React.Fragment>
                  <Popconfirm
                    title={`Are you sure you want to remove ${obj.username} from the class?`}
                    onConfirm={(e) => {
                      e.stopPropagation();
                      props
                        .removeFromClass(props.classId, obj.key)
                        .then(() =>
                          message.success(`Successfully removed ${obj.username} from class!`))
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
                    <a className={styles.delete}>Remove</a>
                  </Popconfirm>
                  <Divider type="vertical" />
                  <Popconfirm
                    title={`Are you sure you want to promote ${obj.username} to teacher?`}
                    onConfirm={(e) => {
                      e.stopPropagation();
                      props
                        .promoteToTeacher(props.classId, obj.key)
                        .then(() =>
                          message.success(`Successfully promoted ${obj.username} to teacher!`))
                        .catch(err =>
                          notification.error({
                            message: `Failed to promote ${obj.username} to teacher`,
                            description: err.message,
                          }));
                    }}
                    onCancel={e => e.stopPropagation()}
                    okText="Yes"
                    onClick={e => e.stopPropagation()}
                  >
                    <a>Promote</a>
                  </Popconfirm>
                </React.Fragment>
              ),
              /* eslint-enable */
            },
          ]}
        />
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  { removeFromClass, promoteToTeacher },
)(Students);
