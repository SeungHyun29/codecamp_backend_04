function solution(numbers) {
    const answer = new Set([]);
    
    for(let i = 0; i <numbers.length; i++) {
        for(let l = i+1; l < numbers.length; l++) {
            const sum = numbers[i] + numbers[l]
            answer.add(sum)
            // if(!answer.includes(sum)) {
            //     answer.push(sum)
            // }
        }
    }
    return [...answer].sort((a,b) => a-b) //sort는 이렇게 해 줘야 올바른 정렬이 됨
} // set 객체는 sort 매서드를 사용 못하기 때문에 스프레드로 배열로 변환해 주고 사용함

// 1. 배열의 형태를 가지는 객체 데이터
// 2. 고유한 값만 저장 (중복 데이터는 존재하지 않음)
// 데이터 추가 newSet.add(4) 숫자 4가 추가됨
// 데이터 삭제 newSet.delete(2) Set 객체 안에 2를 삭제해 주겠다
// 데이터 조회 newSet.has(2) 숫자 2가 존재하는지 체크
// 길이 조회 newSet.size 데이터 개수를 토대로 길이값 출력해 줌
// 데이터 리셋 newSet.clear() 주어진 객체에서 모든 데이터가 삭제됨
// 배열로 변환 (...newSet) -> (...) 스프레드 연산자 사용
// 배열로 변환 Array.from(newSet)

function solution(numbers) {
    const answer = new Set([]);

    
    numbers.forEach((num1, i) => {
        numbers.slice(i+1, numbers.length)
                .forEach((num2) => {
                    const sum = num1 + num2
                    answer.add(sum)
        })    
    })
    return [...answer].sort((a,b) => a-b)
}