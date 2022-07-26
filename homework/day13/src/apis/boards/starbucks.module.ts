import { Module } from '@nestjs/common';
import { StarbucksResolver } from './starbucks.resolver';
import { StarbucksService } from './starbucks.service';

@Module({
  // imports: [],
  // controllers: [AppController],
  providers: [StarbucksResolver, StarbucksService],
})
export class StarbucksModule {}

// index.js 파일
// IoC임 제어 역전
