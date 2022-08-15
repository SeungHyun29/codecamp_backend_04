function solution(n, arr1, arr2) {
  const answer = [];

  for (let i = 0; i < arr1.length; i++) {
    answer[i] = "";
    // 지도1의 암호를 2진수로 변환
    const map1 = arr1[i].toString(2).padStart(n, "0");
    // 지도2의 암호를 2진수로 변환
    const map2 = arr2[i].toString(2).padStart(n, "0");

    for (let j = 0; j < map1.length; j++) {
      // 둘 중 하나라도 벽인 경우, 전체 지도에서도 벽
      if (map1[j] === "1" || map2[j] === "1") {
        answer[i] += "#";
      } else {
        answer[i] += " ";
      }
    }
  }
  return answer;
}

// ================================================================

function solution(n, arr1, arr2) {
  const answer = arr1.map((map1, i) => {
    // 지도1의 암호를 2진수로 변환
    map1 = map1.toString(2).padStart(n, "0");
    // 지도2의 암호를 2진수로 변환
    const map2 = arr2[i].toString(2).padStart(n, "0");

    return map1.split("").reduce((acc, cur, j) => {
      return acc + (cur === "1" || map2[j] === "1" ? "#" : " ");
    }, "");
  });
  return answer;
}
