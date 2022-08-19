import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  // 넘겨준 트래픽을 처리만 해 주는 거라 get 이런 거 필요없음
  @MessagePattern({ qqq: '로그인 실행해 줘' })
  login(data) {
    // 실제 로그인하기
    console.log(data);
    return '로그인 성공';
  }

  logout23152() {
    //
  }

  restoreAccessToken123412() {
    //
  }
}
