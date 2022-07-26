function solution(num) {
    let answer = 0;
    
    for(let i = 0; i < 500; i++) {
        if(num === 1) {
            break; // num이 1이 되면 반복문 멈춤
            // return answer // break 안 쓰고 리턴 쓰면 멈추고 바로 answer 반환
        }
        answer++ // 반복 진행된 횟수 체크
        if(num % 2 === 0) {
            // 짝수인 경우
            num = num / 2
        } else {
            // 홀수인 경우
            num = (num*3) + 1 // 다음 반복에 사용하기 위해 num에 재할당
        }
    }
    return num !== 1 ? -1 : answer // num이 500번을 돌았는데도 1이 아니라면 -1 반환 1이 맞다면 answer 반환
    // return -1
}


function solution(num) {
    let answer = 0;
    
    new Array(500).fill(1).forEach((el) => {
        if(num !== 1) { // num이 1이 아닐 때만 밑에 로직 수행
            answer++ // 반복할 때마다 횟수 증가
            num = num % 2 === 0
                ? num / 2
                : (num*3) + 1 // 삼항연산자로 반복
        }
    })
    
    return num !== 1 ? -1 : answer
}

//forEach 주어진 배열의 길이만큼 반복하는 함수, break return 사용 불가