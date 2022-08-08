function solution(board, moves) {
  let answer = 0;
  const bucket = []; // 뽑은 인형들이 담겨지는 배열

  // 1. 크레인이 이동하는 위치값을 구하는 반복문
  for (let i = 0; i < moves.length; i++) {
    // 2. 크레인이 이동해서 뽑아올 수 있는 인형의 위치값을 구하는 반복문
    for (let j = 0; j < board.length; j++) {
      const doll = board[j][moves[i] - 1];
      // 3. 크레인이 이동하는 위치가 빈칸이 아니라면 (인형이 있다면)
      if (doll !== 0) {
        // 4. 뽑은 인형의 위치를 빈칸으로 만들어 준다
        board[j][moves[i] - 1] = 0;
        // 바구니에 인형을 넣으려고 할 때
        // 바구니의 맨 위에 있는 인형이 현재 넣으려는 인형과 같다면 바구니 맨 위의 인형을 제거
        if (bucket[bucket.length - 1] === doll) {
          answer += 2;
          bucket.pop();
          break;
        }
        // 5. 바구니에 뽑은 인형을 담아 준다.
        bucket.push(doll);
        // 한번 인형을 뽑았다면 같은 위치에 대한 크레인의 동작을 종료
        break;
      }
    }
  }
  return answer;
}
