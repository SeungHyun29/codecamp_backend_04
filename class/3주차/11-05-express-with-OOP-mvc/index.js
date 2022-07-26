import express from 'express'
import { productController } from './mvc/services/product'


const app = express()

// 상품 API
const productController = new productController()
app.post("/products/buy",) // 상품 구매하기
app.post("products/refund",) // 상품 환불하기

app.listen(3000)