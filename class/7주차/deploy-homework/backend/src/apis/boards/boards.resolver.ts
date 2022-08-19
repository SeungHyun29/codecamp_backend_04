import { CACHE_MANAGER, Inject } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Cache } from 'cache-manager';
import { BoardsService } from './boards.service';
import { createBoardInput } from './dto/createBoard.input';
import { Board } from './entities/board.entiti';

@Resolver()
export class BoardsResolver {
  constructor(
    private readonly boardsService: BoardsService,

    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache,
  ) {}

  // @Query(() => String) //graphql 타입 스키마 파일 자동으로 해 주기 위한 타입 지정
  // getHello(): string {
  //   // 타입스크립트
  //   return this.boardsService.getHello();
  // }

  @Query(() => [Board])
  fetchBoards() {
    return this.boardsService.findAll();
  }

  @Mutation(() => String)
  async createBoard(
    // @Args('writer') writer: string,
    // @Args('title') title: string,
    // @Args('contents') contents: string,
    @Args('createBoardInput') createBoardInput: createBoardInput,
  ) {
    // 1. 래디스 캐시에 등록하는 연습
    await this.cacheManager.set('aaa', createBoardInput, {
      ttl: 0,
    });

    // 2. 캐시에서 조회하는 연습
    const mycache = await this.cacheManager.get('aaa');

    console.log(mycache);

    return '지금은 캐시 테스트 중';

    // =================================================================
    // 래디스 연습을 위해서 잠시 주석 걸기
    // return this.boardsService.create({ createBoardInput });
  }
} // 컨트롤러가 리졸버
