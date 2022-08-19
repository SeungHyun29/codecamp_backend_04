import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

class MockAppService {
  getHello(): string {
    return 'Hello World!123123123';
  }
}

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: AppService,
          useClass: MockAppService,
        },
      ],
    }).compile();

    appController = app.get(AppController);
  });
  describe('getHello', () => {
    it('이 테스트의 검증 결과는 Hello World를 리턴해야 됨', () => {
      // const result = appController.getHello();
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
