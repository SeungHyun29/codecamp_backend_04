
function solution(n) {
    // 제곱근: 제곱의 기준이 되는 숫자
    // 2 * 2 === 4 2가 4의 제곱근
    let answer = -1
    // i * i를 하면서 i의 제곱근 받을 거임
    // i * i === n이면 i는 n의 제곱근
    for(let i = 1; i * i <= n; i++) {
        // 11 * 11 === 121 11은 n으로 들어온 121의 제곱근
        if(i * i === n) {
            answer = i + 1
        }    
    }
    // 제곱근을 찾은 경우
    if(answer > 0) {
        return answer * answer
    }
    return answer
}

// function solution(n) {
//     let sqrt = Math.sqrt(n)
//     if(Number.isInteger(sqrt)) {
//         // 정수인 경우: 제곱근이 있는 경우
//         // return (sqrt+1) * (sqrt+1)
//         return Math.pow(sqrt+1, 2)
//     } else {
//         // 정수가 아닌 경우: 제곱근이 없는 경우
//         return -1
//     }
    
// }