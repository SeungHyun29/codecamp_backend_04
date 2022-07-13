function solution(array, commands) {
    let answer = [];
    
    for(let idx =0; idx < commands.length; idx++) {
        const i = commands[idx][0]
        const j = commands[idx][1]
        const k = commands[idx][2]
        
        const arr =array.slice(i-1, j)
        
        arr.sort((a,b) => {
            return a - b
        })
        
        answer.push(arr[k-1])
    }
    
    return answer
        
        
}

// function solution(array,commands) {
//     const answer = commands.map((arr) => {
//         const result = array.slice(arr[0]-1, arr[1])
//                             .sort((a,b) => {
//                                 return a - b
//                             })
        
//         return result[arr[2]-1]
//     })
//     return answer
// }