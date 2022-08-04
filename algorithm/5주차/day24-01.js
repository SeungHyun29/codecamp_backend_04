function solution(d, budget) {
  d.sort((a, b) => a - b);

  let answer = 0; // 지원 가능한 부서의 수
  let sum = 0; // 각 부서가 신청한 금액의 합
  for (let i = 0; i < d.length; i++) {
    sum += d[i];
    if (sum <= budget) {
      answer++;
    }
  }
  return answer;
}

//=================================================

function solution(d, budget) {
  d.sort((a, b) => a - b);

  let answer = 0; // 지원 가능한 부서의 수

  while (budget - d[answer] >= 0) {
    budget -= d[answer];
    answer++;
  }

  return answer;
}

//=================================================

function solution(d, budget) {
  const answer = d
    .sort((a, b) => a - b)
    .filter((money) => {
      budget -= money; // 총 예산에서 지원 금액 차감

      return budget >= 0;
    });

  return answer.length;
}
