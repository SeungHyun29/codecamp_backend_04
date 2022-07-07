function makeNumber(num) {
    let answer = '';

    for(let i =1; i <= num; i++) {
        answer += i
    if(i !== num) {
        answer += '-'
    }
    }
    return answer
}

makeNumber(5)