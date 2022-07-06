function getWelcomeTemplate({name,email,number,phone,site}) {
    const mytemplate = `
    <html>
        <body>
            <h1>${name}님 가입을 환영합니다!! </h1>
            <hr />
            <div>이메일: ${email}</div>
            <div>주민번호: ${number()}</div>
            <div>휴대폰 번호: ${phone}</div>
            <div>내가 좋아하는 사이트: ${changeNumber}</div>
        </body>
    </html>
    `
    console.log(mytemplate)
}

const name = "코드캠프"
const email = "support@codebootcamp.co.kr"
const number = "210510-1010101"
const phone = "000-0000-0000"
const site = "codebootcamp.co.kr"

getWelcomeTemplate({name,email,number,phone,site})