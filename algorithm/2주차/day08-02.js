function solution(x, n) {
    const answer = [];
    for( let i = 1; i <= n; i++) {
        answer.push(i*x)
    }
    return answer
}

// function solution(x, n) {
//     const arr = new Array(n).fill(1)
//     const answer = arr.map((num, i) => {
//         return (i+1) * x
//     })
    
//     return answer
// }