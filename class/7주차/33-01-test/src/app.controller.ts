import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    // 가진 돈 검증

    // 재고가 있는지

    // 상품 구매 잘 이루어지는지

    return this.appService.getHello();
  }
}
