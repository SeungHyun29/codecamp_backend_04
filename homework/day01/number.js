export function centerNumber(mynumber) {
    if(mynumber.includes("-") === false){
        console.log("에러 발생!! 형식이 올바르지 않습니다!!")
        return false
    } else {
        return true
    }
}

export function checkNumber() {
    const aaa = customRegistrationNumber.slice(6)
    const bbb = customRegistrationNumber.slice(-7)
    if(aaa.length !== 6 && bbb.length !== 7) {
        console.log("에러 발생!! 개수를 제대로 입력해 주세요!!")        
    }
}



export function changeNumber(customRegistrationNumber) {
    let arr = customRegistrationNumber.split('')
    return arr.fill("*",8).join('')
}

console.log(customRegistrationNumber)
