function solution(a, b) {
  let answer = 0;

  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }
  return answer;
}

function solution(a, b) {
  const answer = a.reduce((cur, ele, i) => {
    return cur + ele * b[i];
  }, 0);
  return answer;
}
