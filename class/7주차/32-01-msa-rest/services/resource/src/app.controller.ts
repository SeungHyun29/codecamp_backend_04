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
  @MessagePattern({ cmd: 'fetchBoards' })
  fetchBoards() {
    // 실제 데이터 조회하기
    return '게시글 데이터 보내 주기';
  }
}
