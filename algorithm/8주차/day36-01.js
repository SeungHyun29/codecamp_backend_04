function solution(people, limit) {
  let answer = 0;
  people.sort((a, b) => b - a);

  let last = people.length - 1;
  for (let i = 0; i < people.length; i++) {
    const weight = limit - people[i];
    answer++;

    // 가벼운 사람의 몸무게가 보트에 수용할 수 있는 몸무게보다 작을 경우
    // === 보트에 태울 수 있다.
    if (weight >= people[last]) {
      last--;
    }

    // 대기열에 아무도 없는 경우
    if (i >= last) {
      return answer;
    }
  }
}
