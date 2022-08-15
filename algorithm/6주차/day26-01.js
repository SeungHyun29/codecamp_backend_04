function solution(n) {
  // 3진법으로 변환
  n = n.toString(3);

  let reverse = "";
  for (let i = n.length - 1; i >= 0; i--) {
    reverse += n[i];
  }
  // 3진법으로 변환된 데이터를 10진법으로 변환
  return parseInt(reverse, 3);
}
