import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    // private readonly appService: AppService,

    @Inject('AUTH_SERVICE')
    private readonly clientAuthService: ClientProxy,

    @Inject('RESOURCE_SERVICE')
    private readonly clientResourceService: ClientProxy,
  ) {}

  // @Get('/aaa')
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Get('/auth/login')
  login() {
    // auth service로 트래픽 넘겨줌
    return this.clientAuthService.send(
      { qqq: '로그인 실행해 줘' },
      { email: 'aa@a.re', pw: '1234' },
    );
  }

  @Get('/boards')
  fetchBoards() {
    //resource service로 트래픽 넘겨줌
    return this.clientResourceService.send({ cmd: 'fetchBoards' }, {});
  }
}
