import React from 'react';
import { connect } from 'react-redux';
import { Card, Row, Col } from 'antd';
import Students from '../components/Students';
import Teachers from '../components/Teachers';
import EditClass from '../components/EditClass';
import computeScore from '../util/computeScore';
import styles from './Class.module.css';

const Class = (props) => {
  const classId = props.match.params.id;
  if (props.class === undefined) {
    return `Class ID ${classId} not found!`;
  }

  const classInfo = computeScore(props.class, props.languages);
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <Card
          title={
            <div>
              Class Profile
              <EditClass class={{ ...props.class, classId }} className={styles.editButton} />
            </div>
          }
        >
          {[
            { label: 'Class Name', value: props.class.title },
            { label: 'Size', value: classInfo.studentsCount },
            { label: 'Language', value: classInfo.languageLabel },
            { label: 'Created On', value: classInfo.insertedText },
            { label: 'Average Score', value: classInfo.avgScore },
            { label: 'Highest Score', value: classInfo.highestScore },
            { label: 'Lowest Score', value: classInfo.lowestScore },
          ].map(({ label, value }) => (
            <Row className={styles.row} type="flex" key={label}>
              <Col span={12} className={styles.label}>
                {label}
              </Col>
              <Col>{value}</Col>
            </Row>
          ))}
        </Card>
      </div>
      <div className={styles.userList}>
        <Card title="Student List">
          <Students students={classInfo.students} classId={classId} />
        </Card>
        <Card title="Teacher List" className={styles.teacherList}>
          <Teachers teachers={props.class.teachers} classId={classId} />
        </Card>
      </div>
    </div>
  );
};

export default connect((state, ownProps) => ({
  class: state.classes[ownProps.match.params.id],
  languages: state.languages,
}))(Class);
