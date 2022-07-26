import express from "express";
import { ProductController } from "./mvc/controllers/product.controller.js";
import { CouponController } from "./mvc/controllers/coupon.controller.js";
import { BoardController } from "./mvc/controllers/board.controller.js";
import { CashService } from "./mvc/services/cash.service.js";
import { ProductService } from "./mvc/services/product.service.js";
import { PointService } from "./mvc/services/point.service.js";

const app = express();

// 서비스 의존성
const cashService = new CashService(); // 캐시서비스를 밖에 만들어 줌
const productService = new ProductService(); // new 한 번으로 모든 곳에서 재사용 가능 (싱글톤패턴)
const pointService = new PointService(); // 쿠폰 구매 방식이 포인트결제로 변경됨

// 상품 API
const productController = new ProductController(cashService, productService);
app.post("/product/buy", productController.buyProduct); // 상품 구매하기
app.post("/product/refund", productController.refundProduct); // 상품 환불하기

// 쿠폰(상품권) API
const couponController = new CouponController(cashService);
app.post("/coupon/buy", couponController.buyCoupon); // 쿠폰(상품권) 구매하기

// 게시판 API
const boardController = new BoardController();
app.get("/board", boardController.fetchBoards); // 게시글 조회하기
app.post("/boards", boardController.creatBoard); // 게시글 등록하기

app.listen(3000);
