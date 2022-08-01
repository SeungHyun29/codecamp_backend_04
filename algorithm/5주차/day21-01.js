const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function solution(s, n) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += " "; // s[i]
    } else {
      const word = lower.includes(s[i]) ? lower : upper;
      let idx = word.indexOf(s[i]) + n;
      if (idx >= 26) {
        idx -= 26;
      }
      answer += word[idx];
    }
  }
  return answer;
}

// const lower = "abcdefghijklmnopqrstuvwxyz";
// const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// function solution(s, n) {
//     const answer = s.split('')
//                     .reduce((acc,cur) => {
//                         const word = lower.includes(cur) ? lower : upper
//                         let idx = word.indexOf(cur) + n
//                         if(idx >= 26) idx -= 26
//                         return acc + (
//                             cur === ' ' ? cur : word[idx]
//                         )
//                     }, '')
//     return answer
// }
