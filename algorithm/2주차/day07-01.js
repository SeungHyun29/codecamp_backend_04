function solution(seoul) {
    let x = 0; // 김서방의 위치 (인덱스) 값을 저장

    for( let i = 0; i < seoul.length; i++ ) {
        if( seoul[i] === "Kim" ) {
            x = i;
                        break;
        }
    }

    return `김서방은 ${x}에 있다`
}