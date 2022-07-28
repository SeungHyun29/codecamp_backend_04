const answerTable = [
  // 1번 학생이 문제를 찍는 방식
  [1, 2, 3, 4, 5], // 1번 학생, 5개의 숫자 패턴
  // 2번 학생이 문제를 찍는 방식
  [2, 1, 2, 3, 2, 4, 2, 5], // 2번 학생, 8개의 숫자 패턴
  // 3번 학생이 문제를 찍는 방식
  [3, 3, 1, 1, 2, 2, 4, 4, 5, 5], // 3번 학생, 10개의 숫자 패턴
];

function solution(answers) {
  // 학생들의 점수를 저장하는 배열
  const score = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    for (let j = 0; j < answerTable.length; j++) {
      if (answerTable[j][i % answerTable[j].length] === answers[i]) {
        score[j]++;
      }
    }
  }
  // 제일 많이 맞힌 학생의 점수를 구한다
  const biggest = Math.max(...score);

  const answer = [];
  for (let i = 0; i < score.length; i++) {
    if (score[i] === biggest) {
      answer.push(i + 1);
    }
  }
  return answer;
}

// function solution(answers) {
//     const scoreList = answerTable.map((e, i) => {
//         const score = answers.reduce((acc,cur,j) => {
//             return acc + (cur === e[j % e.length] ? 1 :0)
//         }, 0)
//         return { student: i+1, score: score}
//     })

//     const biggest = Math.max(...scoreList.map((e) => {
//         return e.score
//     }))

//     const answer = scoreList.filter((e) => {
//         return biggest === e.score
//     }).map((e) => {
//         return e.student
//     })

//     return answer
// }
