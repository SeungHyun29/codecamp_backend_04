function solution(participant, completion) {
  participant.sort();
  completion.sort();
  // completion.sort((a,b) => a > b ? 1 : -1) // 숫자 오름차순 정렬할 때만 콜백 함수 받아서 사용
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}

// splice 배열에 사용 가능한 메소드
// 1. 지정한 배열의 특정 구간 요소를 제거할 수 있다.
// 2. 지정한 배열의 특정 구간에 요소를 추가할 수 있다.

// const arr = [ 1, 2, 3, 4 ]
// arr.splice(1, 1) 인자로 두 개를 넣어 줌 // 제거한 데이터들이 담긴 배열 반환 그래서 새로운 변수에 담거나 재할당해 주면 안 됨
// 첫 번째에는 기준으로 삼고자 하는 데이터
// 두 번째에는 총 몇 개의 요소를 제거해 줄 건지

// arr.splice(1, 0, 5)
// 세 번째 인자에는 추가하고 싶은 데이터
// 0을 넣어 주지 않고 몇 개의 요소를 제거해 줄 건지 정해 주면 제거와 추가 둘 다 가능

// mutable
// 원본 배열 변한
// 배열에만 사용 가능한 메소드

// inmutable
// 원본 데이터 변환 X
// 문자열, 숫자에 사용 가능한 메소드
