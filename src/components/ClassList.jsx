import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd';
import moment from 'moment';
import Students from './Students';
import { DATA } from '../util/languages';

const ClassList = props => (
  <Table
    expandRowByClick
    expandedRowRender={Students}
    pagination={{ hideOnSinglePage: true }}
    dataSource={Object.entries(props.classes).map(([id, classInfo]) => {
      const students = Object.entries(classInfo.students || {}).map(([id, student]) => {
        const scores = Object.entries(student.songs).reduce((acc, [songId, sections]) => {
          const sectionsScores = Object.entries(sections).reduce(
            (accumulator, [sectionId, section]) => {
              const sectionScores = Object.entries(section).reduce(
                (sectionAcc, [timestamp, lines]) => {
                  const linesArr = Object.values(lines);
                  sectionAcc[timestamp] = {
                    score: Math.round(linesArr.reduce((score, line) => score + line.score, 0) /
                        linesArr.length *
                        100),
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
      });
      const scores = students.length === 0 ? [0] : students.map(({ score }) => score);
      return {
        ...classInfo,
        key: id,
        languageLabel: DATA.LABEL[classInfo.language],
        createdOn: moment(classInfo.createdOn).format('ddd, DD MMM YY, hh:mm a'),
        studentsCount: Object.keys(classInfo.students).length,
        students,
        avgScore: Math.round(scores.reduce((sum, score) => sum + score) / scores.length) || 0,
        highestScore: Math.max(...scores),
        lowestScore: Math.min(...scores),
      };
    })}
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
        title: 'Size',
        dataIndex: 'studentsCount',
      },
      {
        title: 'Average Score',
        dataIndex: 'avgScore',
      },
      {
        title: 'Highest Score',
        dataIndex: 'highestScore',
      },
      {
        title: 'Lowest Score',
        dataIndex: 'lowestScore',
      },
      {
        title: 'Actions',
        render: obj => (
          <a
            onClick={(e) => {
              e.stopPropagation();
              props.toggleModal(obj);
            }}
          >
            Edit
          </a>
        ),
      },
    ].map(obj => ({
      ...obj,
      align: 'center',
    }))}
  />
);

export default connect(state => ({ classes: state.classes }))(ClassList);
