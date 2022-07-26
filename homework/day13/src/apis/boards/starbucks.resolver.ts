import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { StarbucksService } from './starbucks.service';
import { createStarbucksInput } from './dto/createStarbucks.input';
import { Board } from './entities/board.entiti';

@Resolver()
export class StarbucksResolver {
  constructor(private readonly starbucksService: StarbucksService) {}

  // @Query(() => String) //graphql 타입 스키마 파일 자동으로 해 주기 위한 타입 지정
  // getHello(): string {
  //   // 타입스크립트
  //   return this.boardsService.getHello();
  // }

  @Query(() => [Board])
  fetchStarbucks() {
    return this.starbucksService.findAll();
  }

  @Mutation(() => String)
  createStarbucks(
    @Args('createStarbucksInput') createStarbucksInput: createStarbucksInput,
  ) {
    return this.starbucksService.create({ createStarbucksInput });
  }
} // 컨트롤러가 리졸버
