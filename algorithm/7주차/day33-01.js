function solution(progresses, speeds) {
  const answer = [];
  let day = 0;

  for (let i = 0; i < progresses.length; i++) {
    // 100% 완성까지 며칠이 걸리는지
    const process = Math.ceil((100 - progresses[i]) / speeds[i]);

    if (process > day) {
      day = process;
      answer[answer.length] = 1;
    } else if (day >= process) {
      // 개발이 완료됐지만 앞에 있는 기능이 개발될 때까지 기다리는 경우
      answer[answer.length - 1]++;
    }
  }
  return answer;
}
