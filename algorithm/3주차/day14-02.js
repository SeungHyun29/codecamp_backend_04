function solution(arr1, arr2) {
  let answer = [[]];
  // 1. arr1 배열의 전체 배열 요소들을 가져온다
  for (let i = 0; i < arr1.length; i++) {
    // 2. arr1 배열에서 가져온 배열들의 요소들을 참조
    for (let j = 0; j < arr1[i].length; j++) {
      // 3. i와 j 인덱스를 활용해 sum이라는 변수에 합을 저장
      const sum = arr1[i][j] + arr2[i][j];
      // 4. i 인덱스 값에 해당하는 배열이 없다면 빈 배열 생성
      if (answer[i] === undefined) {
        answer[i] = [];
      }
      // 5. i와 j의 인덱스를 활용해서 answer의 해당 위치에 데이터 직접 삽입
      answer[i][j] = sum;
    }
  }
  return answer;
}

function solution(arr1, arr2) {
  const answer = arr1.map((numArr, i) => {
    return numArr.map((num, j) => {
      return num + arr2[i][j];
    });
  });
  return answer;
}

// map은 배열에 리턴하자!!
