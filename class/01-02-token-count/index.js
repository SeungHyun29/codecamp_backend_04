console.log("안녕하세요");

function getToken(aaa) {
    // undefined
    //null

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
    console.log(result)
}

getToken(-1)