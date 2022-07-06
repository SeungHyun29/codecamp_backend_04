import {centerNumber,checkNumber,changeNumber} from './number.js'

function customRegistrationNumber(mynumber) {
    //1. 주민번호 가운데 구성 "-" 체크하기
    const isValid = centerNumber(mynumber)
    if(isValid === false) {
        return
    }
    //2. 주민번호 앞 6자리 뒤7자리 구성 체크하기
    const check = checkNumber(mynumber); {
        if (check === false) {
            return
        }
    }
    //3. 뒤 7자리 중 끝 6자리 *로 변경해서 출력하기
    changeNumber(mynumber)
}

customRegistrationNumber("210510-1010101")


