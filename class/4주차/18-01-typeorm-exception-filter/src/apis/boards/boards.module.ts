import { Module } from '@nestjs/common';
import { BoardsResolver } from './boards.resolver';
import { BoardsService } from './boards.service';

@Module({
  // imports: [],
  // controllers: [AppController],
  providers: [BoardsResolver, BoardsService],
})
export class BoardsModule {}

// index.js 파일
// IoC임 제어 역전
