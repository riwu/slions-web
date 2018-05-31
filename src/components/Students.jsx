import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd';
import StudentDetails from './StudentDetails';

const Students = props => (
  <Table
    expandRowByClick
    expandedRowRender={data => <StudentDetails {...data} />}
    dataSource={Object.entries(props.students || {}).map(([id, student]) => {
      const scores = Object.entries(student.songs).reduce((acc, [songId, sections]) => {
        const sectionsScores = Object.entries(sections).reduce(
          (accumulator, [sectionId, section]) => {
            const sectionScores = Object.entries(section).reduce(
              (sectionAcc, [timestamp, lines]) => {
                const linesArr = Object.values(lines);
                sectionAcc[timestamp] = {
                  score: Math.round(linesArr.reduce((score, line) => score + line.score, 0) / linesArr.length * 100),
                  lines,
                };
                return sectionAcc;
              },
              {},
            );
            const sectionScoresArr = Object.values(sectionScores).map(({ score }) => score);
            accumulator[sectionId] = {
              highest: sectionScoresArr.length && Math.max(...sectionScoresArr),
              section: sectionScores,
            };
            return accumulator;
          },
          {},
        );
        const sectionScoresArr = Object.values(sectionsScores);
        acc[songId] = {
          avg:
            sectionScoresArr.reduce(
              (sectionScoresAcc, { highest }) => sectionScoresAcc + highest,
              0,
            ) / sectionScoresArr.length,
          sections: sectionsScores,
        };
        return acc;
      }, {});
      const scoresArr = Object.values(scores);
      return {
        key: id,
        ...student,
        scores,
        score: scoresArr.reduce((acc, { avg }) => acc + avg, 0) / scoresArr.length,
      };
    })}
    columns={[
      {
        title: 'Username',
        dataIndex: 'username',
      },
      {
        title: 'Email',
        dataIndex: 'email',
      },
      {
        title: 'Score',
        dataIndex: 'score',
      },
    ]}
  />
);

export default connect((state, props) => ({
  students: (state.classes[props.classId] || {}).students,
}))(Students);