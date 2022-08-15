function solution(s) {
  // recursion 함수 ( 재귀함수 )
  function recursion(s, arr) {
    if (s === "1") {
      return arr;
    }
    arr[0]++;
    arr[1] += s.split("").filter((el) => el === "0").length;
    s = s.split("").filter((el) => el !== "0").length;

    return recursion(s.toString(2), arr);
  }

  return recursion(s, [0, 0]);
}
