function solution(x) {
  let answer = 0;
  x = String(x);

  for (let i = 0; i < x.length; i++) {
    answer += Number(x[i]);
  }
  return x % answer === 0 ? true : false;
  // return x % answer === 0 삼항연산자 굳이 안 써도 됨 리턴이 불린값이라서
}

function solution(x) {
  const answer = String(x)
    .split("") // 문자열을 쪼개서 배열로 바꿔 주는 메서드
    // '' 안에 넣어준 인자값을 기준으로 쪼개 주는 건데 비었으면 하나하나 쪼개 주라는 것
    .reduce((cur, ele) => {
      return cur + Number(ele);
    }, 0); // 초기값을 숫자로 설정해 주면 cur은 넘버타입 지정해 줄 필요 없음
  return x % answer === 0;
}
