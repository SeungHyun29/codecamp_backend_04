import 'dotenv/config'
import coolsms from 'coolsms-node-sdk';

export function checkValidationPhone(myphone){
    if (myphone.length !== 10 && myphone.length !== 11) {
        console.log('올바른 핸드폰 번호를 입력해 주세요')
        return false
    } else {
        return true
    }
}

export function getToken(myphone) {
    const n = 6
    if (n === undefined) {
        console.log('에러 발생 양수만 입력해 주세요')
        return  
    } else if (n <= 0) {
        console.log('에러 발생 양수만 입력해주세요')
        return
    } else if (n > 10) {
        console.log('10자리까지만 토큰 생성이 가능합니다.')
        return
    }
        const token = String(Math.floor(Math.random() * 10 ** n)).padStart(n,'0')
        return token
}

export async function sendTokenToSMS(myphone, token) {
    const SMS_KEY = process.env.SMS_KEY
    const SMS_SECRET = process.env.SMS_SECRET
    const SMS_SENDER = process.env.SMS_SENDER
    // coolsms로 메시지를 보냄
    const mysms = coolsms.default;
    const messageServicae = new mysms(SMS_KEY,SMS_SECRET)
    // coolsms -> 통신사 -> myphone의 번호
    const response = await messageServicae.sendOne({
        to: myphone,
        from: SMS_SENDER,
        text: `${myphone}으로 인증 번호 ${token}이 전송되었습니다.`
    })
    console.log(response)
}
