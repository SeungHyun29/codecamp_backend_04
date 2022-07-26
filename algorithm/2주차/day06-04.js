function solution(phone_number) {
    let answer = '';
    
    for(let i = 0;  i <phone_number.length; i++) {
        if( i < phone_number.length-4) {
            // 뒷 4자리를 제외한 앞의 번호들 *로 처리
            answer += '*'
        } else {
            answer += phone_number[i]
            
        }
    }
    return answer

    // answer = answer.padStart(phone_number.length-4, '*')
    // answer += phone_number.slice(phone_number.length-4)
    
    // return answer
    
}