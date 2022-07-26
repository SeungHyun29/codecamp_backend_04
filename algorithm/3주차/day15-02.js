function solution(s) {
  let answer = "";
  s = s.toLowerCase();
  let idx = 0;
  for (let i = 0; i < s.length; i++) {
    let word = s[i];
    if (s[i] === " ") {
      idx = 0;
    } else {
      if (idx === 0) {
        word = s[i].toUpperCase();
      }
      idx++;
    }
    answer += word;
  }
  return answer;
}
