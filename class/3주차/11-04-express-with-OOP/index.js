import express from 'express'
import { CashService } from './cash.js'
import { ProductService } from './product.js'

const app = express()

// 상품 구매하기
app.post("/products/buy", (req,res) => {
    // 1. 가진 돈 검증하는 코드 (대락 10줄 정도 => 2줄)
    const cashservice = new CashService()
    const hasMoney = cashservice.checkValue()

    // 2. 판매 여부 검증하는 코드 (대략 10줄 정도 => 2줄)
    const productservice = new ProductService()
    const isSoldout = productservice.checkSoldout()

    // 3. 상품 구매하는 코드
    if(hasMoney && !isSoldout) {
        res.send("상품 구매 완료")
    }

})
// 상품 환불하기
app.post("/products/refund", (req,res) => {
    // 2. 판매 여부 검증하는 코드 (대략 10줄 정도 => 2줄)
    const productservice = new ProductService()
    const isSoldout = productservice.checkSoldout()


    // 2. 상품 환불하는 코드
    if(isSoldout) {
        res.send("상품 환불 완료")
    }
})

app.listen(3000)