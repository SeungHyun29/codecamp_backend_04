export class CouponController {
  constructor(moneyService) {
    this.moneyService = moneyService;
  }

  buyCoupon(req, res) {
    // 1. 가진돈 검증하는 코드(10줄 => 2줄)
    // const moneyService = new CashService()
    const hasMoney = this.moneyService.checkValue(); // true 또는 false

    // // 2. 쿠폰 구매하는 코드
    if (hasMoney) {
      res.send("쿠폰을 구매합니다.");
    }
  }
}

// 강한 결합 왜냐 지금 캐시서비스에 쿠폰컨트롤러가 의지하고 있기 때문
// 이때 캐시서비스는 의존성
