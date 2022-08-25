const numbering = {
  "[": 0,
  "]": 1,
  "{": 2,
  "}": 3,
  "(": 4,
  ")": 5,
};

function solution(s) {
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    // 왼쪽으로 한칸씩 밀기
    s = s.substring(1) + s[0];
    const stack = [];

    for (let l = 0; l < s.length; l++) {
      // 닫힌 괄호인지, 열린 괄호인지를 판단 ( 열림 : 짝수, 닫힘 : 홀수 )
      if (numbering[s[l]] % 2 === 0) {
        // 열린 괄호만 찾아온다.
        stack.push(numbering[s[l]]); // 숫자로 넣는다.
      } else {
        // 닫힌 괄호라면 배열에 열린 괄호가 무조건 있는지 체크
        if (stack.includes(numbering[s[l]] - 1)) {
          const last = stack[stack.length - 1];

          if (last === numbering[s[l]] - 1) {
            stack.splice(stack.length - 1, 1);
          }
        } else {
          // 열린 괄호가 없다면 반복문 중단
          break;
        }
      }

      // 가장 마지막을 체크하면서, 모든 괄호의 짝이 동등하게 맞을 때
      if (l === s.length - 1) {
        if (stack.length === 0) {
          answer++;
        }
      }
    }
  }
  return answer;
}
