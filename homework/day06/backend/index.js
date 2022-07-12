//const express = require('express')
import express  from "express"
import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'
import {options} from './swagger/config.js'
import cors from 'cors'
import {checkValldationPhone,getToken,sendTokenToSMS} from './phone.js'
import {checkValidationEmail,getWelcomeTemplate,sendTemplateToEmail} from './email.js'


const app = express()

app.use(express.json());
app.use(cors());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));


app.get('/users', (req, res) => {
    const result = [
        { email : "aaa@gmail.com", 
        name : "철수",
        phone : "010-1234-5678",
        personal : "180110-2222222",
        prefer : "https://naver.com", 
        }, 
        { email : "bbb@gmail.com", 
        name : "햄스터",
        phone : "010-1234-5555",
        personal : "190110-2222222",
        prefer : "https://naver.com", 
        }, 
        { email : "ccc@gmail.com", 
        name : "정한",
        phone : "010-1234-5666",
        personal : "200110-2222222",
        prefer : "https://naver.com", 
        }, 
        { email : "ddd@gmail.com", 
        name : "마루",
        phone : "010-1234-5777",
        personal : "210110-2222222",
        prefer : "https://naver.com", 
        }, 
        { email : "fff@gmail.com", 
        name : "지수",
        phone : "010-1234-5888",
        personal : "220110-2222222",
        prefer : "https://naver.com", 
        },
    ];

    // 2. 꺼내온 결과 응답 주기
    res.send(result);

})



app.get('/starbucks', (req,res) => {
    const result = [
        { name: '아메리카노', kcal: 5 },
        { name: '카페라떼', kcal: 10 },
        { name: '콜드브루', kcal: 15 },
        { name: '카페모카', kcal: 50 },
        { name: '돌체라떼', kcal: 500 },
        { name: '카라멜라떼', kcal: 200 },
        { name: '바닐라라떼', kcal: 20 },
        { name: '에스프레소', kcal: 1 },
        { name: '디카페인', kcal: 5 },
        { name: '오트라떼', kcal: 300 }
    ]
        


    // 2. 저장 결과 응답 주기
    res.send(result)
})

app.post('/tokens/phone', (req, res) => {
    // req.body 객체의 myphone의 값을 myphone이라는 변수에 담기.
    const myphone = req.body.myphone;
    
    // 1. 휴대폰번호 자릿수 맞는지 확인하기
    const isValid = checkValldationPhone(myphone);
    if (isValid) {
    // 2. 핸드폰 토큰 6자리 만들기
    const mytoken = getToken();

    // 3. 핸드폰번호에 토큰 전송하기
    sendTokenToSMS(myphone, mytoken);
    res.send('인증완료!!!');
    }
});

app.post("/users", (req,res) => {
    const {name,myphone,prefer,email} =req.body.myuser
    // 1. 이메일이 정상인지 확인 (1-존재여부, 2-"@"포함 여부")
    const isValid = checkValidationEmail(email)
    if(isValid === false) return
    

    // 2. 가입환영 템플릿 만들기
    const mytemplate = getWelcomeTemplate({name,myphone,prefer})

    // 3. 이메일에 가입 환영 템플릿 전송하기
    sendTemplateToEmail(email, mytemplate)

    res.send("가입완료")
})





app.listen(3000, () => {
    console.log(`프로그램을 켜는데 성공했어요`)
})