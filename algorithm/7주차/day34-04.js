function solution(skill, skill_trees) {
  let answer = 0;

  for (let i = 0; i < skill_trees.length; i++) {
    let currentIdx = 0; // 선행스킬의 순서를 비교하기 위한 변수

    for (let j = 0; j < skill_trees[i].length; j++) {
      const idx = skill.indexOf(skill_trees[i][j]);

      if (idx !== -1) {
        // 선행스킬 순서에 포함되는 스킬이라면,
        if (idx !== currentIdx) {
          // 선행스킬을 먼저 배우지 않은 경우 (불가능한 스킬트리)
          break;
        }
        currentIdx++;
      }

      if (j === skill_trees[i].length - 1) {
        // 마지막을 체크
        // (중간에 반복이 종료되지 않았다. === 필요한 스킬이 모두 선행된 스킬트리)
        answer++;
      }
    }
  }

  return answer;
}
