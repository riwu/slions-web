import React from 'react';
import { connect } from 'react-redux';
import { Table, Popconfirm, notification, message, Modal } from 'antd';
import StudentDetails from './StudentDetails';
import { removeFromClass } from '../actions';
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
            onClick: () => {
              console.log('student', student);
              this.setState({ student, visible: true });
            },
          })}
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
            {
              title: 'Action',
              /* eslint-disable jsx-a11y/anchor-is-valid */
              render: obj => (
                <Popconfirm
                  title="Are you sure you want to remove this student from the class?"
                  onConfirm={(e) => {
                    e.stopPropagation();
                    props
                      .removeFromClass(props.classId, obj.key)
                      .then(() =>
                        message.success(`Successfully removed ${obj.username} from class!`))
                      .catch(err =>
                        notification.error({
                          message: 'Failed to remove the student from class',
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
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  { removeFromClass },
)(Students);
