function solution(numbers) {
  let answer = 0;

  for (let i = 1; i <= 9; i++) {
    if (numbers.includes(i) === false) {
      answer += i;
    }
  }
  return answer;
}

function solution(numbers) {
  const answer = new Array(9) // 9번 반복할 수 있는 새로운 배열 만들어 줌
    .fill(1) // 길이 9의 배열을 숫자 1로 채워 줌
    .reduce((cur, ele, i) => {
      // reduce는 배열 메서드 콜백을 인자로 받음
      const num = ele + i;
      return numbers.includes(num) // 다음 반복의 cur을 결정할 수 있도록 리턴해줌
        ? cur
        : cur + num;
    }, 0); // 초기값 0이 cur에 들어옴 인덱스값이 i에 들어옴
  return answer;
}
