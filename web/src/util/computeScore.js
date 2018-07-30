import { DATA } from './languages';
import formatDate from './formatDate';

const computeScores = (classInfo) => {
  const students = Object.entries(classInfo.students || {}).map(([studentId, student]) => {
    const scores = Object.entries(student.songs).reduce((acc, [songId, sections]) => {
      const sectionsScores = Object.entries(sections).reduce(
        (accumulator, [sectionId, section]) => {
          const sectionScores = Object.entries(section).reduce((sectionAcc, [timestamp, lines]) => {
            const linesArr = Object.values(lines);
            sectionAcc[timestamp] = {
              score: Math.round((linesArr.reduce((score, line) => score + line.score, 0) / linesArr.length) * 100),
              lines,
            };
            return sectionAcc;
          }, {});
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
        avg: sectionScoresArr.length
          ? Math.round(sectionScoresArr.reduce(
            (sectionScoresAcc, { highest }) => sectionScoresAcc + highest,
            0,
          ) / sectionScoresArr.length)
          : 0,
        sections: sectionsScores,
      };
      return acc;
    }, {});
    const scoresArr = Object.values(scores);
    return {
      key: studentId,
      ...student,
      scores,
      score: scoresArr.length
        ? Math.round(scoresArr.reduce((acc, { avg }) => acc + avg, 0) / scoresArr.length)
        : 0,
    };
  });
  const scores = students.length === 0 ? [0] : students.map(({ score }) => score);
  return {
    languageLabel: DATA.LABEL[classInfo.language],
    createdOnText: formatDate(classInfo.createdOn),
    studentsCount: Object.keys(classInfo.students || {}).length,
    students,
    avgScore: Math.round(scores.reduce((sum, score) => sum + score) / scores.length) || 0,
    highestScore: Math.max(...scores),
    lowestScore: Math.min(...scores),
  };
};

export default computeScores;
