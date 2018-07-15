import React from 'react';
import { connect } from 'react-redux';
import { Table, Popconfirm } from 'antd';
import moment from 'moment';
import { getJoinedClasses } from '../actions';
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
          ].map(obj => ({
            ...obj,
            align: 'center',
          }))}
        />
      </div>
    );
  }
}

export default connect(
  state => ({ joinedClasses: state.joinedClasses, languages: state.languages }),
  { getJoinedClasses },
)(JoinedClasses);
