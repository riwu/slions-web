import React from 'react';
import { connect } from 'react-redux';
import { Table, Popconfirm, notification, message, Card } from 'antd';
import moment from 'moment';
import { getJoinedClasses, leaveClass } from '../actions';
import formatDate from '../util/formatDate';
import styles from './Classes.module.css';

class JoinedClasses extends React.Component {
  componentDidMount() {
    this.props.getJoinedClasses();
  }
  render() {
    const { props } = this;
    return (
      <div className={styles.container}>
        <Card>
          <Table
            pagination={{ hideOnSinglePage: true }}
            dataSource={props.joinedClasses.map(info => ({
              ...info,
              key: info.id,
              createdOnText: formatDate(info.createdOn),
              languageLabel: props.languages[info.language],
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
                title: 'Action',
                /* eslint-disable jsx-a11y/anchor-is-valid */
                render: obj => (
                  <Popconfirm
                    title="Are you sure you want to leave this class?"
                    onConfirm={() =>
                      props
                        .leaveClass(obj.id)
                        .then(() => message.success(`Successfully left class: ${obj.title}`))
                        .catch(e =>
                          notification.error({
                            message: 'Failed to leave class',
                            description: e.message,
                          }))
                    }
                    okText="Yes"
                  >
                    <a>Leave</a>
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
      </div>
    );
  }
}

export default connect(
  state => ({ joinedClasses: state.joinedClasses, languages: state.languages }),
  { getJoinedClasses, leaveClass },
)(JoinedClasses);
