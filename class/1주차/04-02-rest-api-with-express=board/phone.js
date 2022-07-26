export function checkValldationPhone(myphone) {
    console.log ("======", myphone)
    if(myphone.length !== 10 && myphone.length !== 11){
        console.log("에러 발생!! 핸드폰 번호를 제대로 입력해 주세요!!")
        return false
    } else {
        return true
    }
}

export function getToken() {
    const aaa = 6
    if(aaa === undefined) {
        console.log("에러 발생!! 개수를 제대로 입력해 주세요!!")
        return
    } else if(aaa <= 0){
        console.log("에러 발생!! 개수가 너무 적습니다!!")
        return
    } else if(aaa > 10) {
        console.log("에러 발생!! 개수가 너무 많습니다!!")
    }
    const result = String(Math.floor(Math.random() * 10 ** aaa)).padStart(aaa,"0")
    return result
    //console.log(result)
}

export function sendTokenToSMS(myphone,result) {
    console.log(myphone + "번호로 인증번호" + result + "을 전송합니다.")
}