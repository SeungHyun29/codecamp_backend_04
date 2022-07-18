function solution(arr) {
    const answer = []
    
    let min = arr[0];
    
    // 1. 제일 작은 수 찾기
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i]  
        }
    }
    // 2. 제일 작은 수를 제외한 데이터를 배열에 추가
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== min) {
            answer.push(arr[i])
        }
    }
    
    // 빈 배열인지 체크해서
    return answer.length === 0 
    // 빈 배열이라면 -1이 담긴 배열을 리턴
    ? [-1] 
    // 아니라면 2번 과정에서 받아온 배열을 리턴
    : answer
}

function solution(arr) {
    // 1. 제일 작은 수 찾기
    const min = Math.min(...arr)

    // 2. 제일 작은 수를 제외한 데이터를 배열에 추가
    const answer = arr.filter((num) => {
        return num !== min 
    })

    return answer.length === 0 
    ? [-1] // 빈 배열이라면 -1이 담긴 배열을 리턴 
    : answer // 아니라면 2번 과정에서 받아온 배열을 리턴
}