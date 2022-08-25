function solution(n, words) {
  for (let i = 1; i < words.length; i++) {
    const player = (i % n) + 1;
    const turn = Math.floor(i / n) + 1;

    // 이전 사람이 말한 단어의 가장 뒷부분의 알파벳을 가져온다.
    const prev = words[i - 1][words[i - 1].length - 1];
    // 현재 사람이 말한 단어의 가장 앞부분의 알파벳을 가져온다.
    const current = words[i][0];

    // 이전 사람이 말한 단어의 뒷 알파벳으로 시작하지 않을 때
    // 내가 현재 말한 단어를 배열의 인덱스값에 찾았을 때,
    // 제일 먼저 찾아온 인덱스 값과 동일하지 않을 경우 (= 중복으로 말했을 경우)
    if (prev !== current || words.indexOf(words[i]) !== i) {
      return [player, turn];
    }
  }
  return [0, 0];
}
