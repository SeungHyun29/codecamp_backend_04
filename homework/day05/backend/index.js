//const express = require('express')
import express  from "express"
import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'
import {options} from './swagger/config.js'


const app = express();
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));


app.get('/users', (req, res) => {
    const result = [
        { email : "aaa@gmail.com", 
        name : "철수",
        phone : "010-1234-5678",
        personal : "180110-2222222",
        prefer : "https://naver.com" 
        }, 
        { email : "bbb@gmail.com", 
        name : "햄스터",
        phone : "010-1234-5555",
        personal : "190110-2222222",
        prefer : "https://naver.com" 
        }, 
        { email : "ccc@gmail.com", 
        name : "정한",
        phone : "010-1234-5666",
        personal : "200110-2222222",
        prefer : "https://naver.com" 
        }, 
        { email : "ddd@gmail.com", 
        name : "마루",
        phone : "010-1234-5777",
        personal : "210110-2222222",
        prefer : "https://naver.com" 
        }, 
        { email : "fff@gmail.com", 
        name : "지수",
        phone : "010-1234-5888",
        personal : "220110-2222222",
        prefer : "https://naver.com" 
        }
    ]

    // 2. 꺼내온 결과 응답 주기
    res.send(result);

});



app.get('/starbucks', (req,res) => {
    const result = [
        { name: '아메리카노', kcal: 5 },
        { name: '카페라뗴', kcal: 10 },
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





app.listen(3000, () => {
    console.log(`프로그램을 켜는데 성공했어요`)
})