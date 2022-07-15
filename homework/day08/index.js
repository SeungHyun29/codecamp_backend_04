import { checkValidationPhone, getToken, sendTokenToSMS } from "./phone.js"
import mongoose from 'mongoose'
import express from 'express';
import { Board } from './models/board.model.js';

// import cors from 'cors'
// app.use(cors());

const app = express()
const port = 3000
app.use(express.json())

// 휴대폰 인증번호

app.post('/tokens/phone', async (req,res) => {
  
  const myphone = req.body.phone;
  // 1. 휴대폰번호 자릿수 맞는지 확인하기
  const isValid = checkValidationPhone(myphone);
  if(isValid===false) return;
  // 2. 핸드폰 토큰 6자리 만들기
  const mytoken = getToken();
  // 3. 핸드폰 번호에 토큰 전송하기

  const result = await Board.findOne({phone: req.body.phone})
  if (result !== null) {
    const board = await Board.updateOne({phone: req.body.phone},{token:mytoken})
  } else {
    const board = new Board({
      token: mytoken,
      phone: req.body.phone,
      isAuth: false
      
    })
    await board.save()
    
  }
  sendTokenToSMS(myphone, mytoken);

  res.send('인증완료')

});

app.patch('/tokens/phone', async (req, res) => {
  const result1 = await Board.findOne({phone: req.body.phone})
  const result2 = await Board.findOne({token: req.body.token})
    if (result1 === null) {
      res.send(false)
    } else if (result2 === null) {
      res.send(false)
    } else {
      await Board.updateOne({token: req.body.token},{isAuth: true})
      res.send(true)
    }

  
  }
)


app.post('/boards', async (req,res)=> {
  console.log(req.body.writer);
  console.log(req.body.title);
  console.log(req.body.contents);
  // 1. 데이터를 등록하는 로직=> DB에 접속해서 데이터 저장하기
  const board = new Board({
    writer: req.body.writer,
    title: req.body.title,
    contents: req.body.contents
  })
    //.save 전까지는 js에 임시저장상태, .save()명령 이후로 db로 저장됨.
  // await은 
  await board.save()
  // 2. 저장 결과 돌려주기
  res.send('게시물 등록에 성공하였습니다.');
});


  app.get('/boards', async (req, res) => {
    const result = await Board.find()
    // 2. 꺼내온 결과 응답 주기
    res.send(result)
  })



// 몽고DB 접속!!
mongoose.connect("mongodb://my-database:27017/tokens")

// app.listen 접속을 기다리다가 성공하면 / console.log실행됨
app.listen(3000, () => {
  console.log(`프로그램 켜는데 성공했어요`);
});