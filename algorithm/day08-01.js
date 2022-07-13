function solution(n)
{
    let answer = 0;
    n = String(n)
    for(let i = 0; i < n.length; i++) {
        answer += Number(n[i])
    }

    return answer
}

// function solution(n) {
//     let str = String(n)
//     let arr = str.split('')
//     let answer = arr.reduce((cur, ele) => {
//         return cur + Number(ele)

//     },0)
//     return answer
// }