import express from 'express'
import { ProductController } from './mvc/controllers/product.controller'
import { CouponController } from './mvc/controllers/coupon.controller.js'
import { BoardController } from './mvc/controllers/board.controller.js'

const app = express()

// 게시판 API
const boardController = new BoardController()
app.get('/board', boardController.fetchBoards) // 게시글 조회하기
app.post("/boards", boardController.creatBoard) // 게시글 등록하기

// 상품 API
const productController = new ProductController()
app.post('/product/buy', productController.buyProduct) // 상품 구매하기
app.post('/product/refund', productController.refundProduct) // 상품 환불하기


// 쿠폰(상품권) API
const couponController = new CouponController()
app.post('/coupon/buy', couponController.buyCoupon) // 쿠폰(상품권) 구매하기


app.listen(3000)
