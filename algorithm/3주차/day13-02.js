function solution(a, b) {
  let answer = 0;

  if (a === b) {
    return a;
  }
  // 최소값
  // 반복문이 실행될 때 설정되는 초기값(a와 b 중에서 더 작은 수가 들어옴)
  const start = a > b ? b : a; // Math.min(a,b) 이 메서드로 주어진 인자들 중에 가장 작은 수를 담아 줌

  // 최대값
  // 반복문이 종료되는 조건을 설정(a와 b 중에서 더 큰 수가 들어옴)
  const end = a > b ? a : b; // Math.max(a,b)

  for (let i = start; i <= end; i++) {
    answer += i;
  }
  return answer;
}
