import express from "express"
import {checkValldationPhone,getToken,sendTokenToSMS} from './phone.js'
// import {checkValidationEmail,getWelcomeTemplate,sendTemplateToEmail} from './email.js'
import swaggerUi from 'swagger-ui-express' 
import swaggerJSDoc from 'swagger-jsdoc'
import {options} from './swagger/config.js'
import cors from 'cors'
import mongoose from "mongoose"
import { Token } from "./models/token.model.js"
// import { User } from "./models/user.model.js"
import { Starbucks } from "./models/starbucks.model.js"
import { UserController } from "./controllers/user.controller.js"


const app = express()
app.use(cors())
app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));


const userController = new UserController();
app.get('/users', userController.userCheck)
app.post('/user', userController.userSignup)



app.post('/tokens/phone', async (req,res) => {
    
    const myphone = req.body.phone
    //1. 휴대폰 번호 자릿수 맞는지 확인하기
    const isValid = checkValldationPhone(myphone)
    if(isValid === false){
        return
    } 

    //2. 핸드폰 토큰 6자리 만들기
    const mytoken = getToken()
    //3. 핸드폰 번호에 토큰 전송하기
    const result = await Token.findOne({phone: req.body.phone})
    if (result !== null) {
        const token = await Token.updateOne({phone: req.body.phone},{token:mytoken})
    } else {
        const token = new Token({
            token: mytoken,
            phone: req.body.phone,
            isAuth: false
        })
        await token.save()
    
    }

    sendTokenToSMS(myphone,mytoken)
    res.send("핸드폰으로 인증 문자가 전송되었습니다.")
})

app.patch('/tokens/phone', async (req, res) => {
    const result1 = await Token.findOne({phone: req.body.phone})
    const result2 = await Token.findOne({token: req.body.token})
    
    if (result1 === null) {
        res.send(false)
    } else if (result2 === null) {
        res.send(false)
    } else if (result2.token === req.body.token && result2.isAuth === false) {
        await Token.updateOne({token: req.body.token},{isAuth: true})
        res.send(true)
    }
    }
)


app.get("/starbucks", async (req,res) => {
    const starbucks = await Starbucks.find()
    res.send(starbucks)
})

// 몽고DB 접속
mongoose.connect("mongodb://my-database:27017/mydocker04")

// Backend API 서버 오픈
app.listen(3000, () => {
    console.log(`프로그램을 켜는데 성공했어요`)
})