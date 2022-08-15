const filter = "qwertyuiopasdfghjklzxcvbnm1234567890-_.";

function solution(new_id) {
  // 1단계 : 대문자를 소문자로 치환
  new_id = new_id.toLowerCase();

  // 2단계 : 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.) 제외한 모든 문자를 제거
  let answer = "";
  for (let i = 0; i < new_id.length; i++) {
    if (filter.includes(new_id[i])) {
      answer += new_id[i];
    }
  }

  // 3단계 : 마침표(.)가 2번 이상 연속된다면, 하나의 마침표로 치환
  while (answer.includes("..")) {
    answer = answer.replace("..", ".");
  }

  // 4단계 : 마침표(.)가 처음이나 끝에 위치한다면 제거
  if (answer[0] === ".") {
    answer = answer.substring(1);
  }

  function removeLastDot() {
    if (answer[answer.length - 1] === ".") {
      answer = answer.substring(0, answer.length - 1);
    }
  }
  removeLastDot();

  // 5단계 : 빈 문자열이라면, "a"를 대입한다.
  if (answer.length === 0) {
    // if( answer === "" )
    answer = "a";
  }

  // 6단계 : 길이가 16자 이상일 때 15자까지 제거한다.
  //        제거 후에, 마침표가 끝에 위치한다면 마침표를 제거
  if (answer.length >= 16) {
    answer = answer.substring(0, 15);
    removeLastDot();
  }

  // 7단계 : 문자열 길이가 2글자 이하라면, 마지막 글자를 3글자가 될 때까지 반복해서 붙인다.
  if (answer.length <= 2) {
    answer = answer.padEnd(3, answer[answer.length - 1]);
  }
  return answer;
}
